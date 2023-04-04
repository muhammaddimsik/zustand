import React from "react";
import { useStore } from "../stores/Store";

function Cart() {
  const state = useStore();
  return (
    <div>
      {state.cart.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default Cart;
