//console.log("probando prototipo");
//console.log("instalacion de modulos: express , readline-sync, nodemon -D");
//console.log("Probando nodemon");


const express = require("express");
const app =express();
const morgan = require("morgan");
const cors = require("cors");


//Settings
app.set("port", process.env.PORT || 8080);
app.set("json spaces", 2);

//middelware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(cors());

//Routes
app.use(require("./routes/rutas"));
app.use("/api/MySQL", require("./routes/MySQL"));

//Inciando el server
app.listen(app.get("port"), () => {
    console.log("Hola desde el puerto " + app.get("port"));
});




