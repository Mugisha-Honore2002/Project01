import React, {useEffect,useState} from "react";



const ListTodo = () =>{
    const [todos, setTodos] = useState([]);
    // ======== DELETE TODO =========

    const deleteTodo = async (id) =>{
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todoss/${id}`,{
                method:"DELETE"
            });

            console.log(deleteTodo);
        } catch (err) {
            console.error(err.message);
        }
    }
    // ======== DISPLAY ALL TODOS ========
    const getTodos = async()=>{
        try {
            
            const response = await fetch("http://localhost:5000/todoss");
            const jsonData = await response.json();

            setTodos(jsonData)
        } catch (err) {
            console.error(err.message);
        }
    }
    useEffect(()=>{
       getTodos(); 
    },[]);
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
            <th className="p-3">Edit</th>
            <th className="p-3">Delete</th>
          </tr>
        </thead>

        <tbody className="text-center">
            {todos.map(todo =>(
                <tr key={todo.todo_id}>
                    <td>
                        {todo.discription}
                    </td>
                    <td>
                        <button className="w-[60px] h-[30px] text-white rounded-md bg-green-700">Edit</button>
                    </td>
                    <td>
                        <button className="w-[60px] h-[30px] text-white rounded-md bg-red-700" onClick={()=> deleteTodo(todo.todo_id)}>Delete</button>
                    </td>
                </tr>
            ))}
          {/** <tr className="border-b">
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
          </tr> */}
          

        </tbody>

      </table>
    </div>
        </>
    )
}

export default ListTodo;