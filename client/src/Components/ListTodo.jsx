import React, { useEffect, useState } from "react";

const ListTodo = () => {
  // ======== STATE ========
  const [todos, setTodos] = useState([]);

  // Base URL to avoid repeating it and making mistakes
  const API_URL = "http://localhost:5000/todoss";

  // ======== DISPLAY ALL TODOS ========
  const getTodos = async () => {
    try {
      const response = await fetch(API_URL);
      const jsonData = await response.json();

      // Ensure we are setting an array even if the backend fails
      setTodos(Array.isArray(jsonData) ? jsonData : []);
    } catch (err) {
      console.error("Fetch error:", err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  // ======== DELETE TODO =========
  const deleteTodo = async (id) => {
    try {
      // FIX: Changed port from 5432 to 5000 and fixed spelling
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
      });

      if (response.ok) {
        setTodos(todos.filter(todo => todo.todo_id !== id));
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  // ======== UPDATE SPECIFIC TODO ==========
  const updateTodo = async (id) => {
    try {
      const newText = prompt("Enter new description:");
      
      // Don't update if the user hits cancel or leaves it blank
      if (!newText) return;

      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        // FIX: Key name must match backend: "description" (not discription)
        body: JSON.stringify({ description: newText }) 
      });

      if (response.ok) {
        getTodos(); // Refresh list after update
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <h1 className="mb-10 text-6xl font-bold">TODO LIST</h1>

        <table className="border-collapse border border-gray-300 shadow-lg w-[600px]">
          <thead className="text-white bg-blue-500">
            <tr>
              <th className="p-3 border border-gray-300 left-[500px]">Description</th>
              <th className="p-3 border border-gray-300">Edit</th>
              <th className="p-3 border border-gray-300">Delete</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {todos.length > 0 ? (
              todos.map(todo => (
                <tr key={todo.todo_id} className="hover:bg-gray-50">
                  <td className="p-3 border border-gray-300">
                    {/* FIX: Match spelling here too */}
                    {todo.description}
                  </td>
                  <td className="p-3 border border-gray-300">
                    <button
                      className="w-[70px] py-1 text-white rounded-md bg-green-700 hover:bg-green-800 transition"
                      onClick={() => updateTodo(todo.todo_id)}
                    >
                      Edit
                    </button>
                  </td>
                  <td className="p-3 border border-gray-300">
                    <button
                      className="w-[70px] py-1 text-white rounded-md bg-red-700 hover:bg-red-800 transition"
                      onClick={() => deleteTodo(todo.todo_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="p-5 text-gray-500">No todos found. Add one!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListTodo;