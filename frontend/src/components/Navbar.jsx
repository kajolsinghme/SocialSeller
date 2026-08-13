import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getMe } from "../services/auth.service";

const getInitials = (name) => {
  if (!name) {
    return "U";
  }
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

const Navbar = () => {
  const [user, setUser] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await getMe(token);
        setUser(response.data.user);
        console.log(response.data.user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);
  return (
    <div className=" flex justify-between items-center px-4 py-2 shadow-sm border border-gray-200">
      <h1 className="font-semibold text-sm">
        {location.pathname === "/orders" ? "Orders" : "Dashboard"}
      </h1>
      <div className="flex gap-2">
        <div className="rounded-full border-gray-800 bg-gray-100 flex p-2 justify-center items-center">
          <p className="text-xs text-violet-950 font-semibold">
            {getInitials(user?.name)}
          </p>
        </div>
        <div className="pr-12">
          <h2 className="text-xs font-semibold">{user?.name || "..."}</h2>

          <p className="text-gray-600 text-xs">{user?.email || "..."}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
