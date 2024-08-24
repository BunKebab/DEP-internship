import React from "react";

import DeleteProduct from "./DeleteProduct";

const AdminProductCard = ({ product }) => {
  return (
    <div className="flex items-center justify-normal gap-3 p-3 w-full h-wrap mt-3">
      <div className="flex flex-col items-center justify-center text-center w-1/4">
        <img src={product.image} alt={product.name} className="h-full w-full aspect-square rounded-sm object-cover"/>
        <h4>{product.name}</h4>
      </div>
      <div className="flex w-1/4 text-center items-center justify-center">
        <p>{product.description}</p>
      </div>
      <div className="flex w-1/4 text-center items-center justify-center">
        <p>{product.price}Rs</p>
      </div>
      <div className="flex w-1/4">
        <DeleteProduct product={product} />
      </div>
    </div>
  );
};

export default AdminProductCard;
