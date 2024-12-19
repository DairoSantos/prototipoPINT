const { Router } = require("express");
const router = Router();

//Ruta GET
router.get("/rutaGetConRouter",  (req,res) => {
    res.send("Hola desde una web llamada en el servidor utilizando routes")
});



router.get("/rutaGet", (req, res) => {
    res.send("hola desde una web llamada en el servidor");
});

module.exports = router;