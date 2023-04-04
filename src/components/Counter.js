import React from "react";
import { useStore } from "../stores/Store";

function Counter() {
  const counter = useStore();

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Counter</h1>
      <h1 className="text-2xl underline my-4">{counter.count}</h1>
      <button
        className="border me-1 font-bold py-2 px-4 rounded-md text-xl border-blue-500 hover:bg-blue-500 hover:text-white"
        onClick={counter.decrease}
      >
        -
      </button>
      <button
        className="border font-bold py-2 px-4 rounded-md text-xl border-blue-500 hover:bg-blue-500 hover:text-white"
        onClick={counter.increase}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
