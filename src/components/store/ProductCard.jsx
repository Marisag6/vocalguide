import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 flex flex-col justify-between h-[260px]">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
          <p className="text-gray-600 text-sm">{product.description}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-pink-600 font-bold text-lg">${product.price}</span>
          <Link to="/checkout">
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md">
           Comprar Ahora
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
