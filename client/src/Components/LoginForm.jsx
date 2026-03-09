import React from "react";
import { Link } from "react-router-dom";
import bg from "../Assets/Mountain gorilla in Rwanda_.jpeg";
import Home from "./Home"

const LoginForm = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <form className="flex flex-col w-[350px] p-8 bg-slate-800 rounded-xl shadow-lg">

        <h1 className="mb-6 text-3xl font-bold text-center text-white">
          Login
        </h1>

        <label className="mb-1 text-white">Email / Phone</label>
        <input
          type="text"
          className="p-2 mb-4 rounded-md outline-none"
        />

        <label className="mb-1 text-white">Password</label>
        <input
          type="password"
          className="p-2 mb-4 rounded-md outline-none"
        />
        
        <a href="#" className="mb-4 text-sm text-blue-300 hover:underline">
          Forgotten password?
        </a>

        <h5 className="mb-4 text-[10px] text-white ">I don't have an account  <Link to="/Home" className="mb-4 text-[10px] text-blue-300 hover:underline">Signup</Link></h5>

        <button className="p-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">
          Login
        </button>

      </form>

    </div>
  );
};

export default LoginForm;