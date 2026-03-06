import React from "react";


const ListTodo = () =>{
    return(
        <>
        <div className="flex justify-center mt-10">
        <h1 className="text-6xl font-bold ">TODO LIST</h1>
        </div>

    <div className="flex justify-center mt-10">
      <table className="border border-gray-300 shadow-lg w-[600px]">
        
        <thead className="text-white bg-blue-500">
          <tr>
            <th className="p-3">Description</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody className="text-center">
          <tr className="border-b">
            <td className="p-3">Learn React</td>
            <td className="p-3">
              <button className="px-3 py-1 mr-2 text-white bg-green-500 rounded">
                Edit
              </button>
              <button className="px-3 py-1 text-white bg-red-500 rounded">
                Delete
              </button>
            </td>
          </tr>

          <tr className="border-b">
            <td className="p-3">Learn PostgreSQL</td>
            <td className="p-3">
              <button className="px-3 py-1 mr-2 text-white bg-green-500 rounded">
                Edit
              </button>
              <button className="px-3 py-1 text-white bg-red-500 rounded">
                Delete
              </button>
            </td>
          </tr>

        </tbody>

      </table>
    </div>
        </>
    )
}

export default ListTodo;