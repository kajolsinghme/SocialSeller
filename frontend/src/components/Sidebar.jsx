import { LayoutDashboard, ShoppingBag, LogOut, X } from "lucide-react";
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

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
        />
      )}

      <div
        className={`
    fixed md:static
    top-0 left-0
    z-60
    bg-white
    flex-col
    border-r border-gray-200
    w-56
    min-h-screen
    ${isOpen ? "flex" : "hidden"}
    md:flex
  `}
      >
        <div className="p-5 flex gap-2 items-center border-b border-gray-200">
          <img
            src="./social_seller_logo.png"
            alt="Social Seller"
            className="w-6 h-6 rounded-full"
          />

          <h1 className="text-md font-bold">Social Seller</h1>

          <button
            onClick={onClose}
            className="ml-auto md:hidden cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 p-4">
          <ul className="space-y-2">
            {navitems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-2 py-2 rounded-xl w-full text-sm ${
                        isActive
                          ? "bg-gray-100 text-black"
                          : "text-gray-500 hover:bg-gray-100 hover:text-black"
                      }`
                    }
                  >
                    <Icon size={16} />
                    {item.label}
                  </NavLink>
                </li>
              );
            })}

            <li>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-2 py-2 font-medium rounded-xl text-gray-500 w-full text-sm hover:bg-gray-100 hover:text-black cursor-pointer"
              >
                <LogOut size={16} />
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
