import { LayoutDashboard, ShoppingBag, LogOut } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="bg-white flex flex-col border-r border-gray-200 w-56 min-h-screen">
      <div className="p-5 flex  gap-2 items-center border-b border-gray-200">
        <img
          src="./social_seller_logo.png"
          alt=""
          className="w-6 h-6 rounded-full"
        />
        <h1 className="text-md font-bold">Social Seller</h1>
      </div>

      <div className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <button className="group flex items-center gap-2 px-2 py-2 font-medium text-gray-500 rounded-xl w-full text-sm hover:bg-gray-100 hover:text-black cursor-pointer">
              <LayoutDashboard
                size={16}
                className="text-gray-500 group-hover:text-black"
              />{" "}
              Dashboard
            </button>
          </li>
          <li>
            <button className="group flex items-center gap-2 px-2 py-2 font-medium rounded-xl w-full text-gray-500 text-sm hover:bg-gray-100 hover:text-black cursor-pointer">
              <ShoppingBag
                className="text-gray-500 group-hover:text-black"
                size={16}
              />{" "}
              Orders
            </button>
          </li>
          <li>
            <button className="flex items-center gap-2 px-2 py-2 font-medium rounded-xl text-gray-500 w-full text-sm hover:bg-gray-100 hover:text-black cursor-pointer">
              <LogOut
                className="text-gray-500 group-hover:text-black"
                size={16}
              />{" "}
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
