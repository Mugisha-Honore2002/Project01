import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home"
import InputTodo from "./Components/InputTodo";
import ListTodo from "./Components/ListTodo";




function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/InputTodo" Component={InputTodo}/>
        <Route path="/ListTodo" Component={ListTodo}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;