import Order from "../models/order.model";

export const createOrder = async (req, res) => {
  try {
    const order = await Order.create({ ...req.body, seller: req.user.id });

    return res
      .staus(201)
      .json({ success: true, message: "Order created successfully", order });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getOrders = async(req,res)=>{
  try{
    const orders = await Order.find({seller: req.user.id}).sort({createdAt: -1})

    return res.status(200).json({
      success:true,
    message: "Orders retrived successfully",
      orders
    });
  }
  catch(error){
    return res.status(500).json({
      success:false,
      message:"Internal server error"
    });
  }
}