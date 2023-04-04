import React from "react";
import { useStore } from "../stores/Store";
import { shallow } from "zustand/shallow";

const product = [
  { id: 1, name: "Nasi Goreng" },
  { id: 2, name: "Capcai" },
];

function ProductList() {
  const state = useStore(
    (state) => ({
      addToCart: state.addToCart,
    }),
    shallow
  );

  console.log("render producstlist");

  return (
    <div className="py-6">
      {product.map((product) => (
        <div key={product.id} className="mb-2">
          <h2>{product.name}</h2>
          <button
            className="border px-4 py-2 rounded-md text-sm hover:bg-slate-500 hover:text-white"
            onClick={() => state.addToCart(product)}
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
