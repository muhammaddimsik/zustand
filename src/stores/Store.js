import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// export const useStore = create((set, get) => ({
//   user: { name: "Dimsik" },
//   cart: [],
//   addToCart: (product) => set({ cart: [...get().cart, product] }),
// }));

function store(set, get) {
  return {
    user: { name: "Dimsik" },
    cart: [],
    addToCart: (product) => set({ cart: [...get().cart, product] }),
  };
}

export const useStore = create(
  devtools(
    persist(store, {
      name: "my-store",
    })
  )
);
