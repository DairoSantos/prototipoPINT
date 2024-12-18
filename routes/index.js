const { Router } = require("express");
const router = Router();

//Ruta GET
router.get("/rutaGetConRouter", function (req,res) {
    res.send("Hola desde una web llamada en el servidor utilizando routes")
});



router.get("/rutaGet", function(req, res){
    console.log("Probando en node, una llamada en el server");
    res.send("hola desde una web llamada en el servidor");
});

module.exports = router;