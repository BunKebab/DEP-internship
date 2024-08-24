import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="flex items-center justify-normal h-full w-full p-3 gap-3 rounded-lg shadow-lg bg-gray-100 text-green-600">
      <img
        src={product.image}
        alt={product.name}
        className="object-cover w-2/3 aspect-square rounded-lg"
      />
      <div className="flex flex-col w-1/3 text-left items-start justify-between gap-3">
        <div>
          <h1 className="font-bold">{product.name}</h1>
          <p>Price: {product.price}Rs</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
