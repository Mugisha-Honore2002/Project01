import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home"
import InputTodo from "./Components/InputTodo";
import ListTodo from "./Components/ListTodo";
import LoginForm from "./Components/LoginForm";




function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" Component={LoginForm} />
        <Route path="/Home" Component={Home}/>
        <Route path="/InputTodo" Component={InputTodo}/>
        <Route path="/ListTodo" Component={ListTodo}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;