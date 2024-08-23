import React from "react";

import Sidebar from "../components/Sidebar";

const AdminOrders = () => {
  return (
    <div className="flex items-center justify-start gap-3 w-full h-full bg-gray-100 text-green-600">
      <Sidebar />
      <div className="flex flex-col w-full h-full items-start justify-start gap-3">
        <h1 className="text-2xl font-bold">Orders</h1>
      </div>
    </div>
  );
};

export default AdminOrders;
