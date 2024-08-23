import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register, reset } from "../actions/AuthSlice";
import { toast } from "react-toastify";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, isLoading, isSuccess, message, user } = useSelector(
    (state) => state.auth
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isSuccess || user) {
      navigate("/");
    }
    if (isError) {
      toast.error(message);
    }
    dispatch(reset());
  }, [isSuccess, isError, user, message, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
    };
    dispatch(register(userData));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-3 bg-gray-100 text-green-600">
      <div className="flex flex-col p-3 w-1/3 aspect-square shadow-lg text-center justify-around gap-3">
        <div>
          <h1 className="font-bold text-2xl">Register</h1>
          <p>
            Already have an account?{" "}
            <Link to={"/login"} className="underline">
              Login now
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1 text-left mt-1">
            <label>Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="border border-green-300 bg-gray-100 text-gray-600 rounded-lg p-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1 text-left mt-1">
            <label>Email address</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="border border-green-300 bg-gray-100 text-gray-600 rounded-lg p-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-gray-100 w-full p-3 rounded-lg mt-3"
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
