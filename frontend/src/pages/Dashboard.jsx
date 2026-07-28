import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard.jsx";
import { ShoppingBag, RotateCcw, RefreshCcw, IndianRupee } from "lucide-react";
import OrdersTable from "../components/OrdersTable.jsx";
import { useState } from "react";

const Dashboard = () => {
  const [filter, setFilter] = useState("overall");
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
              value="248"
              description="All time orders received"
              icon={<ShoppingBag size={16} color="indigo" />}
              backgroundColor="purple"
            />
            <StatCard
              title="Total Returns"
              value="12"
              description="Items returned by customers"
              icon={<RotateCcw size={16} color="red" />}
              backgroundColor="red"
            />
            <StatCard
              title="Total Exchanges"
              value="7"
              description="Items exchanged by customers"
              icon={<RefreshCcw size={16} color="blue" />}
              backgroundColor="blue"
            />
            <StatCard
              title="Total Income"
              value="1,24,500"
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
