import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useTodosStore = create(
  devtools(
    immer((set) => ({
      todos: [],
      getTodos: async () => {
        const response = await axios.get("http://localhost:3005/contatcs");
        set((state) => {
          state.todos = response.data;
        });
      },
      removeTodo: async (todosId) => {
        const response = await axios.delete(
          `http://localhost:3005/contatcs/${todosId}`
        );
        set((state) => ({
          todos: state.todos.filter((c) => c.id !== todosId),
        }));
      },
      editTodo: async (todosId) => {
        const response = await axios.put(
          `http://localhost:3005/contatcs/${todosId}`
        );
        set((state) => ({
          todos: state.todos.filter((c) => c.id !== todosId),
        }));
      },
    }))
  )
);
