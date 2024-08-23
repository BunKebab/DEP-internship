import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../actions/AuthSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isSuccess) {
      if (user.role === "Customer") {
        navigate("/");
      } else {
        navigate("/dashboard");
      }
    }
    if (isError) {
      toast.error(message);
    }
  }, [isSuccess, isError, message, navigate]);

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-3 bg-gray-100 text-green-600">
      <div className="flex flex-col p-3 w-1/3 aspect-square shadow-lg text-center justify-around gap-3">
        <div>
          <h1 className="font-bold text-2xl">Login</h1>
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="underline">
              Register now
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1 text-left mt-1">
            <label>Email address</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="border border-green-300 bg-gray-100 text-gray-600 rounded-lg p-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-1 text-left mt-1">
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              className="border border-green-300 bg-gray-100 text-gray-600 rounded-lg p-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-gray-100 w-full p-3 rounded-lg mt-3"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
