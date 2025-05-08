const { Router } = require("express");
const router = Router();
const MySQL = require("mysql");

//Create MySQL Connection

const db = MySQL.createConnection({
    host: "127.0.0.1",

    user: "root",

    password: "",

    database: "mysql pruebanode",

    port: 3306
});

db.connect((error) => {
    if (error) {
        console.log("error de conexión" + error);

    } else {
        console.log("conexión establecida");

    }
});



// Ruta GET MySQL
router.get("/getSQL", (req, res) => {
    console.log(db);
    let sql = "SELECT * FROM usuarios";
    let query = db.query(sql, (err, result) => {
        console.log(result);
        res.json(result);
    });
});

// Ruta POST MySQL
router.post("/postSQL", (req, res) => {
    //let post = { usuario: "pruebaNODE", pass: 12345 };
    let post = req.body;
    let sql = "INSERT INTO usuarios SET ?";
    let query = db.query(sql, post, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            res.json(result);
        }

    });
});

module.exports = router;