import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import CountCard from "../components/CountCard";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.product);
  const { orders } = useSelector((state) => state.order);

  const productCount = products.length;
  const orderCount = orders.length;

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (!user.role === "Admin") {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="flex items-center justify-start gap-3 w-full h-full bg-gray-100 text-green-600">
      <Sidebar />
      <div className="flex flex-col w-full h-full items-start justify-start gap-3">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex w-full items-center justify-start gap-3">
          <CountCard quantity={productCount} category="Products" />
          <CountCard quantity={orderCount} category="Orders" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
