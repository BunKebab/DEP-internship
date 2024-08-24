import React from "react";
import { useLocation } from "react-router-dom";

import AddToCart from "../components/AddToCart";

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state || {};

  return (
    <div className="flex flex-col items-center p-3 bg-gray-100 w-full h-full overflow-auto">
      <div className="w-2/3 h-auto text-center bg-gray-100 p-3 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-green-600 mb-3">
          {product.name}
        </h1>
        <div className="flex flex-row text-left gap-3">
          <div className="flex-1">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-2/3 rounded-lg aspect-square object-cover"
            />
            <div className="mt-3 flex gap-3">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} image ${index + 1}`}
                  className="w-16 h-16 object-cover rounded-lg cursor-pointer border-2 border-green-600"
                />
              ))}
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <p className="text-lg text-gray-600">{product.description}</p>
            <div className="flex flex-col items-center justify-between mt-3">
              <span className="text-xl font-bold text-green-600">
                {product.price}Rs
              </span>
              <AddToCart product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
