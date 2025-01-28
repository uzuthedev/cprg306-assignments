"use client";

import { useState } from "react";

const NewItem = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-bold mb-4 text-black">Add New Item</h1>
      <div className="flex items-center space-x-4">
        <button
          className={`px-4 py-2 text-white font-semibold rounded ${
            quantity === 1 ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-500"
          }`}
          onClick={decrement}
          disabled={quantity === 1}
        >
          -
        </button>
        <span className="text-xl font-bold text-black">{quantity}</span>
        <button
          className={`px-4 py-2 text-white font-semibold rounded ${
            quantity === 20 ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-500"
          }`}
          onClick={increment}
          disabled={quantity === 20}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default NewItem;
