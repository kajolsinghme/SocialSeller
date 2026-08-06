import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

const fakeOrders = [
  {
    id: 1,
    customerName: "Rahul Sharma",
    product: "Black Hoodie",
    amount: "₹1,299",
    date: "25 Jul 2026",
    status: "Ordered",
  },
  {
    id: 2,
    customerName: "Priya Singh",
    product: "Summer Dress",
    amount: "₹2,499",
    date: "24 Jul 2026",
    status: "Returned",
  },
  {
    id: 3,
    customerName: "Amit Kumar",
    product: "Sneakers",
    amount: "₹3,999",
    date: "23 Jul 2026",
    status: "Exchanged",
  },
  {
    id: 4,
    customerName: "Neha Verma",
    product: "Denim Jacket",
    amount: "₹4,299",
    date: "22 Jul 2026",
    status: "Ordered",
  },
  {
    id: 5,
    customerName: "Karan Mehta",
    product: "Floral Kurti",
    amount: "₹899",
    date: "21 Jul 2026",
    status: "Ordered",
  },
];

const OrdersTable = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setOrders(fakeOrders);
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
      <div className="flex justify-between p-6">
        <div>
          <h1 className="font-semibold">Recent Orders</h1>
          <p className="text-gray-600 text-xs">5 total orders</p>
        </div>
        <div className="flex justify-start items-center gap-2 bg-gray-100 rounded-xl pl-3">
          <SearchIcon size={16} color="gray" />
          <input
            className=" placeholder:text-sm w-72 outline-none"
            type="text"
            placeholder="Search orders..."
          />
        </div>
      </div>
      <div>
        {loading && <p className="p-6">Loading...</p>}
        {!loading && orders.length === 0 && <p className="p-6">No orders</p>}
        {!loading && orders.length > 0 && (
          <table className="w-full">
            <thead>
              <tr className="text-left bg-gray-50 border border-gray-200">
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                  Customer Name
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                  Product
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                  Amount
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                  Date
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border border-gray-200">
                  <td className="px-6 py-4 text-sm">{order.customerName}</td>
                  <td className="px-6 py-4 text-gray-500 text-sm">
                    {order.product}
                  </td>

                  <td className="px-6 py-4 text-sm font-medium">
                    {order.amount}
                  </td>

                  <td className="px-6 py-4 text-xs text-gray-600">
                    {order.date}
                  </td>

                  <td>
                    <span
                      className={`px-2 py-1 border text-xs font-medium rounded-2xl ${order.status === "Ordered" ? "bg-green-50 border-green-300 text-green-700" : order.status === "Returned" ? "bg-red-50 border-red-300 text-red-600" : "bg-blue-50 border-blue-300 text-blue-700"}`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default OrdersTable;
