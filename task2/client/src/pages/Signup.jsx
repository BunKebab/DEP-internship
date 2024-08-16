import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { register, reset } from "../actions/AuthSlice";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const { name, email, username, password } = formData;

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

  const signupUser = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      username,
      password,
    };

    dispatch(register(user));
  };

  return (
    <div className="flex items-center justify-center w-full h-full px-5">
      <div className="flex flex-col gap-3 text-center justify-center items-center w-auto h-auto">
        <h1 className="text-4xl font-bold">Create a new account</h1>
        <p>
          Already have an account?{" "}
          <Link className="font-medium text-blue-500" to={"/login"}>
            login
          </Link>
        </p>
        <br />
        <form onSubmit={signupUser}>
          <div className="flex flex-col items-start justify-center">
            <input
              placeholder="Name"
              onChange={setInput}
              value={name}
              type="text"
              name="name"
              id="name"
              className="rounded-full border border-gray-600 p-3 w-full"
            />
          </div>
          <br />
          <div className="flex flex-col items-start justify-center">
            <input
              placeholder="Email"
              onChange={setInput}
              value={email}
              type="email"
              name="email"
              id="email"
              className="rounded-full border border-gray-600 p-3 w-full"
            />
          </div>
          <br />
          <div className="flex flex-col items-start justify-center">
            <input
              placeholder="Username"
              onChange={setInput}
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
              placeholder="Password"
              onChange={setInput}
              value={password}
              type="password"
              name="password"
              id="password"
              className="rounded-full border border-gray-600 p-3 w-full"
            />
          </div>
          <br />
          <div>
            <button className="w-full rounded-full p-3 bg-blue-950 text-blue-100">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
