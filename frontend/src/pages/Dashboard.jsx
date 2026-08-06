import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard.jsx";
import { ShoppingBag, RotateCcw, RefreshCcw, IndianRupee } from "lucide-react";
import OrdersTable from "../components/OrdersTable.jsx";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [filter, setFilter] = useState("overall");
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);

  const dashboardData = {
    overall: {
      orders: 248,
      returns: 12,
      exchanges: 7,
      income: "1,24,500",
    },
    last30: {
      orders: 42,
      returns: 3,
      exchanges: 1,
      income: "28,900",
    },
  };

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setStats(dashboardData[filter]);
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [filter]);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6 bg-gray-50">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <p className="text-gray-500 mt-1 mb-4 text-sm">
            Track your sales performance and manage your orders
          </p>
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setFilter("overall")}
              className={`px-4 py-2 rounded-lg text-sm cursor-pointer font-medium transition ${
                filter === "overall"
                  ? "bg-indigo-600 text-white"
                  : "bg-white border border-gray-200 text-gray-600"
              }`}
            >
              Overall
            </button>

            <button
              onClick={() => setFilter("last30")}
              className={`px-4 py-2 rounded-lg text-sm cursor-pointer font-medium transition ${
                filter === "last30"
                  ? "bg-indigo-600 text-white"
                  : "bg-white border border-gray-200 text-gray-600"
              }`}
            >
              Last 30 Days
            </button>
          </div>
          <div className="flex gap-5 mb-8">
            <StatCard
              title="Total Orders"
              value={loading ? '...' : stats?.orders}
              description="All time orders received"
              icon={<ShoppingBag size={16} color="indigo" />}
              backgroundColor="purple"
            />
            <StatCard
              title="Total Returns"
              value={loading ? '...' : stats?.returns}
              description="Items returned by customers"
              icon={<RotateCcw size={16} color="red" />}
              backgroundColor="red"
            />
            <StatCard
              title="Total Exchanges"
              value={loading ? '...' : stats?.exchanges}
              description="Items exchanged by customers"
              icon={<RefreshCcw size={16} color="blue" />}
              backgroundColor="blue"
            />
            <StatCard
              title="Total Income"
              value={loading ? '...' : stats?.income}
              description="Revenue earned so far"
              icon={<IndianRupee size={16} color="green" />}
              backgroundColor="green"
            />
          </div>
          <OrdersTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
