import React from "react";
import { Link } from "react-router-dom";

const CountCard = ({ category, quantity }) => {
  return (
    <Link
      to={`/dashboard/${category}`}
      className="flex flex-col items-center justify-between gap-3 p-3 bg-gray-100 text-green-600 w-1/6 shadow-sm rounded-sm hover:bg-green-600 hover:text-gray-100"
    >
      <div className="text-center">
        <h1 className="font-bold text-lg">{category}</h1>
        <p>{quantity}</p>
      </div>
    </Link>
  );
};

export default CountCard;
