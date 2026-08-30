import { useState } from "react";
import { createOrder } from "../services/order.service";

const OrderModal = ({ onClose, onOrderCreated }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    customerPhone: "",
    customerAddress: "",
    productCode: "",
    productName: "",
    quantity: 1,
    amount: 0,
    orderDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" || name === "amount" ? Number(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      console.log("frontemd", formData);

      const response = await createOrder(token, formData);
      console.log(response.data.order);

      onOrderCreated(response.data.order);
    } catch (error) {
      console.log("STATUS:", error.response?.status);
      console.log("BACKEND ERROR:", error.response?.data);
      console.log("SENT DATA:", formData);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-70">
      <div className="bg-white rounded-xl w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-semibold">Create Order</h2>

          <button onClick={onClose} className="text-gray-500 cursor-pointer">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="customerName"
            placeholder="Customer name"
            value={formData.customerName}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />

          <input
            type="text"
            name="customerPhone"
            placeholder="Customer phone"
            value={formData.customerPhone}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />

          <input
            type="text"
            name="customerAddress"
            placeholder="Customer address"
            value={formData.customerAddress}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />

          <input
            type="text"
            name="productCode"
            placeholder="Product code"
            value={formData.productCode}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />

          <input
            type="text"
            name="productName"
            placeholder="Product name"
            value={formData.productName}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            min={1}
            required
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            min={0}
            required
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />

          <input
            type="date"
            name="orderDate"
            placeholder="Order Date"
            value={formData.orderDate}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm border rounded-lg cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg cursor-pointer"
            >
              Create Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;
