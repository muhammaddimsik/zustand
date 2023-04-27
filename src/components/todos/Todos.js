import React, { useEffect } from "react";
import { useTodosStore } from "../../stores/TodosStore";

function Todos() {
  const todoList = useTodosStore((state) => state.todos);
  const getTodo = useTodosStore((state) => state.getTodos);
  const removeTodo = useTodosStore((state) => state.removeTodo);

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div>
      <h1>Todos List</h1>
      {todoList.map((todo) => (
        <div key={todo.id} className="mb-4">
          <h1 className="font-bold">{todo.name}</h1>
          <h2 className="text-sm">{todo.number}</h2>
          <button
            className="py-1 px-3 text-sm bg-yellow-500 font-semibold text-white rounded"
            onClick={() => removeTodo(todo.id)}
          >
            Delete
          </button>
          <button
            className="py-1 px-3 ml-2 text-sm bg-yellow-500 font-semibold text-white rounded"
            onClick={() => removeTodo(todo.id)}
          >
            Edit
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Todos;
