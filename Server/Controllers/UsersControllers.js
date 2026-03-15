const db = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Login = (req, res) => {

    const { email, password } = req.body;

    const Posql = "SELECT * FROM users WHERE email = $1";

    db.query(Posql, [email], async (err, result) => {

        if (err) {
            return res.status(500).send({
                message: "Database error"
            });
        }

        if (result.rows.length === 0) {
            return res.status(401).send({
                message: "User not found"
            });
        }

        const user = result.rows[0];

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(401).send({
                message: "Invalid Password"
            });
        }

        const token = jwt.sign(
            { id: user.user_id },
            process.env.JWT_KEY,
            { expiresIn: "1h" }
        );

        res.status(200).send({
            message: "LOGIN SUCCESSFUL",
            email: user.email,
            token: token
        });

    });

};

module.exports = { Login };
