import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../services/auth.service";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await login(formData);
      // console.log(response.data)
      setSuccess("Logged in successfully");

      setFormData({ email: "", password: "" });

      navigate("/dashboard")
      
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
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
          Sign in to continue managing your orders
        </p>

        {error && <p className="text-sm text-red-500 mb-3">{error}</p>}

        {success && <p className="text-sm text-green-600 mb-3">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 font-medium block text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full border border-gray-400 px-4 py-2 bg-gray-50 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-sm "
            />
          </div>
          <div>
            <label className="mb-1 font-medium block text-sm">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full border border-gray-400 px-4 py-2 bg-gray-50 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-sm "
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 w-full p-2 rounded-lg text-sm text-white cursor-pointer hover:bg-indigo-700"
          >
            {loading ? "Signing in...": "Sign in"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-md font-semibold text-indigo-600 hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
