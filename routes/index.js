const { Router } = require("express");
const router = Router();

//Ruta GET
router.get("/rutaGetConRouter",  (req,res) => {
    res.send("Hola desde una web llamada en el servidor utilizando routes")
});



router.get("/rutaGet", (req, res) => {
    res.send("hola desde una web llamada en el servidor");
});

router.get("/1", (req, res) => {
    res.send("hola");
});

router.get("/2", (req, res) => {
    res.send("mundo");
});

router.get("/3", (req, res) => {
    res.send("desde el");
});

router.get("/3", (req, res) => {
    res.send("servidor");
});

router.get("/4", (req, res) => {
    res.send("No se si esto vale como 5 rutas diferentes, pero como no se me ocurria nada mas he hecho esto");
});
module.exports = router;