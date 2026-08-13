import { LayoutDashboard, ShoppingBag, LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const navitems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    label: "Orders",
    icon: ShoppingBag,
    path: "/orders",
  },
];

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

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
          {navitems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 py-2 rounded-xl w-full text-sm ${
                    isActive
                      ? "bg-gray-100 text-black"
                      : "text-gray-500 hover:bg-gray-100 hover:text-black"
                  }`
                }
              >
                <Icon size={16} /> {item.label}
              </NavLink>
            );
          })}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-2 py-2 font-medium rounded-xl text-gray-500 w-full text-sm hover:bg-gray-100 hover:text-black cursor-pointer"
          >
            <LogOut size={16} />
            Logout
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;