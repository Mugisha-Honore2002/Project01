const express = require("express");
const app = express();
const cors = require("cors"); 
const dotenv = require("dotenv");


dotenv.config();

const db = require("./db"); 
const { Login } = require("./Controllers/UsersControllers");
const { RegisterTodo, GetAllTodo, GetOneTodo, UpdateTodo, DeleteTodo } = require("./Controllers/TodoControllers");

// ======== MIDDLEWARE =========
app.use(cors());
app.use(express.json());

// =========== ROUTING =============
// ======= USERS ROUTES ============
app.post("/login", Login);

// ======== TODO ROUTES ==========
app.post("/todoss", RegisterTodo);
app.get("/todoss", GetAllTodo);
app.get("/todoss/:id", GetOneTodo);
app.put("/todoss/:id", UpdateTodo);
app.delete("/todoss/:id", DeleteTodo);

// =========== SERVER =============
const PORT = process.env.PORT || 5432;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});