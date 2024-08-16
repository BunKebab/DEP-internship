import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { login, reset } from "../actions/AuthSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const setInput = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const loginUser = (e) => {
    e.preventDefault();

    const user = {
      username,
      password,
    };

    dispatch(login(user));
  };

  return (
    <div className="flex items-center justify-center w-full h-full px-5">
      <div className="flex flex-col gap-3 text-center justify-center items-center w-auto h-auto">
        <h1 className="text-4xl font-bold">Login to your account</h1>
        <p>
          Don't have an account?{" "}
          <Link className="font-medium text-blue-500" to={"/signup"}>
            signup
          </Link>
        </p>
        <br />
        <form onSubmit={loginUser}>
          <div className="flex flex-col items-start justify-center">
            <input
              onChange={setInput}
              placeholder="Username"
              value={username}
              type="text"
              name="username"
              id="username"
              className="rounded-full border border-gray-600 p-3 w-full"
            />
          </div>
          <br />
          <div className="flex flex-col items-start justify-center">
            <input
              onChange={setInput}
              value={password}
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              className="rounded-full border border-gray-600 p-3 w-full"
            />
          </div>
          <br />
          <div>
            <button className="w-full rounded-full p-3 bg-blue-950 text-blue-100">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
