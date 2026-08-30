import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { deleteOrder, getOrders } from "../services/order.service";
import OrderModal from "../components/OrderModal";
import { MoreVertical } from "lucide-react";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await getOrders(token);

        setOrders(response.data.orders);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrders();
  }, []);

  const searchTerm = search.toLowerCase();

  const filteredOrders = orders.filter((order) => {
    const searchMatches =
      order.customerName.toLowerCase().includes(searchTerm) ||
      order.productName.toLowerCase().includes(searchTerm);
    const statusMatches =
      status === "all" || order.status.toLowerCase() === status;

    return searchMatches && statusMatches;
  });

  const handleDelete = async (orderId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this order?",
    );

    if (!confirmed) return;

    try {
      const token = localStorage.getItem("token");
      await deleteOrder(token, orderId);

      setOrders((prevOrders) =>
        prevOrders.filter((order) => order._id !== orderId),
      );

      setOpenMenu(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-6 bg-gray-50 min-h-screen">
          <h1 className="text-xl font-bold">Orders</h1>

          <p className="text-gray-500 mt-1 mb-6 text-sm">
            Manage and track your customer orders
          </p>

          <div className="flex gap-3 mb-6">
            <input
              type="text"
              placeholder="Search orders..."
              onChange={(e) => setSearch(e.target.value)}
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <select
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="ordered">Ordered</option>
              <option value="returned">Returned</option>
              <option value="exchanged">Exchanged</option>
            </select>

            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="ml-auto bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm cursor-pointer"
            >
              + Create Order
            </button>
          </div>

          <div className="bg-white border border-gray-200 mt-6 rounded-xl ">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">
                    Customer
                  </th>
                  <th className="text-left px-4 py-3 font-semibold">Product</th>
                  <th className="text-left px-4 py-3 font-semibold">Amount</th>
                  <th className="text-left px-4 py-3 font-semibold">Status</th>
                  <th className="text-left px-4 py-3 font-semibold">Date</th>
                  <th className="text-left px-4 py-3 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order._id} className="border-b border-gray-100">
                    <td className="px-4 py-3">{order.customerName}</td>
                    <td className="px-4 py-3">{order.productName}</td>

                    <td className="px-4 py-3">₹{order.amount}</td>

                    <td className="px-4 py-3 capitalize">{order.status}</td>
                    <td className="px-4 py-3">
                      {new Date(order.orderDate).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 relative">
                      <button
                        className="p-1 rounded hover:bg-gray-100 cursor-pointer"
                        onClick={() =>
                          setOpenMenu(openMenu === order._id ? null : order._id)
                        }
                      >
                        <MoreVertical size={18} />
                      </button>

                      {openMenu === order._id && (
                        <div className="absolute right-4 top-10 bg-white border border-gray-200 rounded-lg w-32 z-10">
                          <button className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50">
                            Edit
                          </button>

                          {order.status === "ordered" && (
                            <>
                              <button className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50">
                                Return
                              </button>

                              <button className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50">
                                Exchange
                              </button>
                            </>
                          )}

                          <button
                            onClick={() => handleDelete(order._id)}
                            className="block w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-gray-50"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>

        {isCreateModalOpen && (
          <OrderModal onClose={() => setIsCreateModalOpen(false)} />
        )}
      </div>
    </div>
  );
};

export default Order;