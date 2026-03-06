import React, { useState } from "react";

const InputTodo = () => {

  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { description };

      const response = await fetch("http://localhost:5000/todoss", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      console.log(response);

    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <form className="flex justify-center mt-9" onSubmit={onSubmitForm}>
        <div className="h-10 border-black border-solid rounded-l-full w-[500px] shadow-sm shadow-black">
        <input
          type="text"
          className="h-10 border-none ml-[17px] rounded-l-full w-[480px] focus:outline-none"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        </div>
        <button className="w-16 h-10 text-white bg-blue-500 rounded-r-full shadow-sm shadow-black">
          Save
        </button>
      </form>
    </>
  );
};

export default InputTodo;