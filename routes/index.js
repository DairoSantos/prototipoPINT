const { Router } = require("express");
const router = Router();

//Ruta GET
router.get("/rutaGetConRouter",  (req,res) => {
    res.send("Hola desde una web llamada en el servidor utilizando routes")
});



router.get("/rutaGet", (req, res) => {
    res.send("hola desde una web llamada en el servidor");
});

router.get("/0", (req, res) => {
    res.send("Veras que las actulizaciones del server en GITHUB son desde que lo subia ya y es porque no lo habia subido correctamente al principio y me di cuenta tarde, sorry ");
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

router.get("/4", (req, res) => {
    res.send("servidor");
});

router.get("/4", (req, res) => {
    res.send("Probando que pasa si hay 2 rutas con el mismo nombre");
});

router.get("/5", (req, res) => {
    res.send("https://www.youtube.com/watch?v=1vbZMpRTT5M");
});

module.exports = router;