import React, { useState } from "react";

const InputTodo = () => {
  // 1. STATE: This holds what you type
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault(); // Prevents page reload

    try {
      // 2. THE PAYLOAD: The key must be "description" to match your backend
      const body = { description }; 
      
      const response = await fetch("http://localhost:5000/todoss", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        window.location = "/"; // Refresh to see the new data in the list
      }
      
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="mt-10 text-center">
      <h1 className="mb-5 text-4xl font-bold">Add a Task</h1>
      
      <form className="flex justify-center" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="w-1/2 p-2 border rounded-l-md"
          placeholder="What needs to be done?"
          // 3. THE BINDING: This connects the input to the state
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="px-4 py-2 text-white bg-blue-500 rounded-r-md">
          Add
        </button>
      </form>
    </div>
  );
};

export default InputTodo;