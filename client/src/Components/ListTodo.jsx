import React, { useEffect, useState } from "react";

const ListTodo = () => {

  // ======== STATE ========
  const [todos, setTodos] = useState([]);

  // ======== DISPLAY ALL TODOS ========
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todoss");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  // ======== DELETE TODO =========
  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:5000/todoss/${id}`, {
        method: "DELETE"
      });

      setTodos(todos.filter(todo => todo.todo_id !== id));

    } catch (err) {
      console.error(err.message);
    }
  };

  // ======== UPDATE SPECIFIC TODO ==========
  const updateTodo = async (id) => {
    try {

      const newText = prompt("Enter new todo");

      await fetch(`http://localhost:5000/todoss/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ discription: newText })
      });

      getTodos();

    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className="flex justify-center mt-10">
        <h1 className="text-6xl font-bold ">TODO LIST</h1>
      </div>

      <div className="flex justify-center mt-10">
        <table className="border border-gray-300 shadow-lg w-[600px]">

          <thead className="text-white bg-blue-500">
            <tr>
              <th className="p-3">Description</th>
              <th className="p-3">Edit</th>
              <th className="p-3">Delete</th>
            </tr>
          </thead>

          <tbody className="text-center">

            {todos.map(todo => (
              <tr key={todo.todo_id}>
                <td>
                  {todo.discription}
                </td>

                <td>
                  <button
                    className="w-[60px] h-[30px] text-white rounded-md bg-green-700"
                    onClick={() => updateTodo(todo.todo_id)}
                  >
                    Edit
                  </button>
                </td>

                <td>
                  <button
                    className="w-[60px] h-[30px] text-white rounded-md bg-red-700"
                    onClick={() => deleteTodo(todo.todo_id)}
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}

          </tbody>

        </table>
      </div>
    </>
  );
};

export default ListTodo;