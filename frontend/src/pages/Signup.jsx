import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(formData)

    
  };

  return (
    <div className="w-screen bg-gray-50 min-h-screen flex flex-col justify-center items-center gap-6">
      <div className="flex flex-row gap-2 justify-center items-center">
        <img
          src="./social_seller_logo.png"
          alt="logo"
          className="w-8 h-8 rounded-md"
        />
        <h1 className="text-2xl text-gray-800 font-bold">
          Social <span className="text-indigo-600">Seller</span>
        </h1>
      </div>
      <div className="w-full max-w-sm rounded-xl bg-white p-6 border border-gray-300 shadow-2xl">
        <h1 className="font-semibold text-lg">Welcome back</h1>
        <p className="text-sm mb-4 text-gray-500">
          Sign up to start managing your orders
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 font-medium block text-sm">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full border border-gray-400 px-4 py-2 bg-gray-50 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-sm "
            />
          </div>
          <div>
            <label className="mb-1 font-medium block text-sm">Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full border border-gray-400 px-4 py-2 bg-gray-50 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-sm "
            />
          </div>
          <div>
            <label className="mb-1 font-medium block text-sm">Password</label>
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full border border-gray-400 px-4 py-2 bg-gray-50 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-sm "
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 w-full p-2 rounded-lg text-sm text-white cursor-pointer hover:bg-indigo-700"
          >
            Sign up
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-md font-semibold text-indigo-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
