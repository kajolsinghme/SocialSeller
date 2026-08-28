const OrderModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-70">
      <div className="bg-white rounded-xl w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-semibold">Create Order</h2>

          <button onClick={onClose} className="text-gray-500 cursor-pointer">
            ✕
          </button>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Customer name"
            required
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />

          <input
            type="text"
            placeholder="Customer phone"
            required
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />

          <input
            type="text"
            placeholder="Customer address"
            required
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />

          <input
            type="text"
            placeholder="Product code"
            required
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />

          <input
            type="text"
            placeholder="Product name"
            required
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />

          <input
            type="number"
            placeholder="Quantity"
            min={1}
            required
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />

          <input
            type="number"
            placeholder="Amount"
            min={0}
            required
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm border rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg"
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