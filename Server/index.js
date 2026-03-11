const express = require("express");
const app = express();
const cors = require("cors"); 
const db = require("./db");
const dotenv = require("dotenv");


// ======== MIDDLEWARE =========

app.use(cors());
app.use(express.json());
dotenv.config()

// ======== ROUTES ============
app.post("/todoss", async(req,res)=>{
    try {
        const{ discription } =req.body;
        const newTodo = await db.query("INSERT INTO todo(discription) VALUES($1) RETURNING *", [discription]);
        res.json(newTodo);
    } catch (err) {
        console.error(err.message);
    }
});

// ======== GET ALL DATA ===========

app.get("/todoss", async(req,res)=>{
    try {
        const Alldata = await db.query("SELECT * FROM todo");
        res.json(Alldata.rows);
    } catch (err) {
        console.error(err.message);
    }
});
// ========= GET SPECIFIC DATA ==========

app.get("/todoss/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const todo = await db.query("SELECT * FROM todo WHERE todo_id = $1", [id]);

        res.json(todo.rows[0])
    } catch (err) {
        console.error(err.message);
    }
});

// MODIFING SPECIFIC DATA =========

app.put("/todoss/:id", async(req,res)=>{
    try {
        const{id} = req.params;
        const { discription } = req.body;
        const UpdateTodo = await db.query("UPDATE todo SET discription = $1 WHERE todo_id = $2",
        [discription, id]);
        res.json("TODO is updated");
    } catch (err) {
        console.error(err.message);
    }
});

// ========= FELETE SPECIFIC DATA =========

app.delete("/todoss/:id", async(req, res) =>{
    try {
        const {id} =req.params;
        const DeleteTodo =await db.query("DELETE FROM todo WHERE todo_id = $1",
        [id]);
        res.json("Data from TODO is Deleted")
    } catch (err) {
        console.error(err.message);
    }

})
app.listen(5000,()=>{
    console.log("Server is running on port of 5000");
});