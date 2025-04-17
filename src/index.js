//console.log("probando prototipo");
//console.log("instalacion de modulos: express , readline-sync, nodemon -D");
//console.log("Probando nodemon");


const express = require("express");
const app =express();
const morgan = require("morgan");


//Settings
app.set("port", process.env.PORT || 8080);

//middelware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false}));

//Routes
app.use(require("./routes/rutas"));


//Inciando el server
app.listen(app.get("port"), () => {
    console.log("Hola desde el puerto " + app.get("port"));
});




