import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useTodosStore = create(
  devtools(
    immer((set) => ({
      todos: [],
      getTodos: async () => {
        const response = await axios.get("http://localhost:3005/todos");
        set((state) => {
          state.todos = response.data;
        });
      },
    }))
  )
);
