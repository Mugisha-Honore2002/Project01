import{ React, useState }from "react";
import InputTodo from "./InputTodo";
import ListTodo from "./ListTodo";


const home = () =>{
    return(
        <>
        <div className="text-[50px] justify-center bg-blue-400 text-neutral-200 p-9 flex">
        <h1>home page</h1>
        </div>
        <InputTodo/>
        <ListTodo/>
        </>
    );
}
export default home;