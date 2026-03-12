const db = require("./db");
const bcrypt = require("bcryptjs");



const Login = ( req, res ) =>{
    const { email, password } = req.body;

    const Posql = "SELECT * FROM users WHERE user_id = $1";
    db.query(Posql,[email], async(err,result)=>{
        if (err) {
            return res.Status(401).send({
                message:"Try another Email"
            });
        }
        if (result.length == 0) {
            return res.Status(401).send({
                message:"User not found"
            });
        }

        const users = result[0];
        const isMatch = await bcrypt.compare(
            password,
            users.password
        );
        if (!isMatch) {
            return res.status(401).send({
                message:"Invalid Password"
            });
        }
        const token = jwt.sign(
            {id:users.user_id},
            process.env.JWT_KEY,
            {expiresIn:"1h"}
            )
            res.status(200).send({
                message:"LOGIN SUCCESSFUL",
                name: users.email,
                token:token
            })

    })
}

module.exports ={ Login }