import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard.jsx";
import { ShoppingBag, RotateCcw, RefreshCcw, IndianRupee } from "lucide-react";

const Dashboard = () => {
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
          <div className="flex gap-5">
            <StatCard title="Total Orders" value="248" description="All time orders received" icon={<ShoppingBag size={16} color="indigo"/>} />
            <StatCard title="Total Returns" value="12" description="Items returned by customers" icon={<RotateCcw size={16} color="red"/>} />
            <StatCard title="Total Exchanges" value="7" description="Items exchanged by customers" icon={<RefreshCcw size={16} color="blue"/>} />
            <StatCard title="Total Income" value="1,24,500" description="Revenue earned so far" icon={<IndianRupee size={16} color="green"/>} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
