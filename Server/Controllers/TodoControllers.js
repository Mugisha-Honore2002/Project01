const db = require("../db"); 

// ======== REGISTER ============

const RegisterTodo = async (req, res) => {
    try {
        const { description } = req.body;

        const sql = "INSERT INTO todo (description) VALUES($1) RETURNING *";
        
        const newTodo = await db.query( sql, [description]
        );

        res.status(201).json(newTodo.rows[0]);
} catch (err) {
    console.error(err.message);
    res.status(500).json({ 
        error: "Server Error", 
        details: err.message
    });
}
}

// ======== GET ALL DATA ===========
const GetAllTodo = async (req, res) => {
    try {
        const sql = "SELECT * FROM todo";
        const allData = await db.query(sql);
        res.json(allData.rows);
    } catch (err) {
    console.error(err.message);
    res.status(500).json({ 
        error: "Server Error", 
        details: err.message
    });
}
}

// ========= GET SPECIFIC DATA ==========
const GetOneTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "SELECT * FROM todo WHERE todo_id = $1";
        const todo = await db.query(sql, [id]);

        if (todo.rows.length === 0) {
            return res.status(404).json({ message: "Todo not found" });
        }

        res.json(todo.rows[0]);
} catch (err) {
    console.error(err.message);
    res.status(500).json({ 
        error: "Server Error", 
        details: err.message
    });
}
}

// ========= MODIFY SPECIFIC DATA ==========
const UpdateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const sql =  "UPDATE todo SET description = $1 WHERE todo_id = $2";
        const updateResult = await db.query( sql, [description, id]
        );

        if (updateResult.rowCount === 0) {
            return res.status(404).json({ message: "Todo not found" });
        }

        res.json("Todo was updated successfully");
} catch (err) {
    console.error(err.message);
    res.status(500).json({ 
        error: "Server Error", 
        details: err.message
    });
}
}

// ========= DELETE SPECIFIC DATA =========
const DeleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = "DELETE FROM todo WHERE todo_id = $1";
        const deleteResult = await db.query( sql, [id]);

        if (deleteResult.rowCount === 0) {
            return res.status(404).json({ message: "Todo not found" });
        }

        res.json("Todo was deleted successfully");
} catch (err) {
    console.error(err.message);
    res.status(500).json({ 
        error: "Server Error", 
        details: err.message
    });
}
}

module.exports = { RegisterTodo, GetAllTodo, GetOneTodo, UpdateTodo, DeleteTodo };