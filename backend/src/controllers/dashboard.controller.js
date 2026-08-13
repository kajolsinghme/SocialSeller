import Order from "../models/order.model.js";
import mongoose from "mongoose";

export const getDashboardStats = async (req, res) => {
  try {
    const sellerId = req.user.id;
    const sellerObjectId = new mongoose.Types.ObjectId(sellerId);

    const now = new Date();

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(now.getDate() - 30);

    const overallOrders = await Order.countDocuments({ seller: sellerId });

    const last30Orders = await Order.countDocuments({
      seller: sellerId,
      orderDate: { $lte: now, $gte: thirtyDaysAgo },
    });

    const overallReturns = await Order.countDocuments({
      seller: sellerId,
      status: "returned",
    });

    const last30Returns = await Order.countDocuments({
      seller: sellerId,
      status: "returned",
      orderDate: { $lte: now, $gte: thirtyDaysAgo },
    });

    const overallExchanges = await Order.countDocuments({
      seller: sellerId,
      status: "exchanged",
    });

    const last30Exchanges = await Order.countDocuments({
      seller: sellerId,
      status: "exchanged",
      orderDate: { $lte: now, $gte: thirtyDaysAgo },
    });

    const overallIncome = await Order.aggregate([
      {
        $match: {
          seller: sellerObjectId,
          status: { $ne: "returned" },
        },
      },
      {
        $group: {
          _id: null,
          totalIncome: {
            $sum: "$amount",
          },
        },
      },
    ]);
    
    const last30Income = await Order.aggregate([
      {
        $match: {
          seller: sellerObjectId,
          status: { $ne: "returned" },
          orderDate: { $lte: now, $gte: thirtyDaysAgo },
        },
      },
      {
        $group: {
          _id: null,
          totalIncome: {
            $sum: "$amount",
          },
        },
      },
    ]);

    return res.status(200).json({
      success: true,
      stats: {
        overall: {
          orders: overallOrders,
          returns: overallReturns,
          exchanges: overallExchanges,
          income: overallIncome[0]?.totalIncome || 0,
        },
        last30: {
          orders: last30Orders,
          returns: last30Returns,
          exchanges: last30Exchanges,
          income: last30Income[0]?.totalIncome || 0,
        },
      },
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
