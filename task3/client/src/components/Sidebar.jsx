import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-100 text-green-600 rounded-lg shadow-lg h-2/3 p-5 text-xl">
      <nav className="space-y-4">
        <Link
          to="/dashboard"
          className="flex items-center gap-3 hover:bg-green-600 hover:text-gray-100 p-3 rounded-lg"
        >
          Dashboard
        </Link>
        <Link
          to="/dashboard/products"
          className="flex items-center gap-3 hover:bg-green-600 hover:text-gray-100 p-3 rounded-lg"
        >
          Products
        </Link>
        <Link
          to="/dashboard/orders"
          className="flex items-center gap-3 hover:bg-green-600 hover:text-gray-100 p-3 rounded-lg"
        >
          Orders
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
