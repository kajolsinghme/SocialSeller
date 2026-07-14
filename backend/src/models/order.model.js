import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    customerName: {
      type: String,
      required: true,
      trim: true,
    },

    customerPhone: {
      type: String,
      required: true,
      trim: true,
    },

    customerAddress: {
      type: String,
      required: true,
      trim: true,
    },

    productCode: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },

    productName: {
      type: String,
      required: true,
      trim: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    orderDate: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["ordered", "returned", "exchanged"],
      default: "ordered",
    },

    returnReason: {
      type: String,
      default: "",
      trim: true,
    },

    exchangeProductCode: {
      type: String,
      default: "",
      trim: true,
      uppercase: true,
    },

    exchangeProductName: {
      type: String,
      default: "",
      trim: true,
    },

    exchangeDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;