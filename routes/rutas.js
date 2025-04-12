const { Router } = require("express");
const router = Router();

//Ruta GET
router.get("/rutaGetConRouter",  (req,res) => {
    res.send("Hola desde una web llamada en el servidor utilizando routes")
});



router.get("/rutaGet", (req, res) => {
    res.send("hola mundo desde el servidor");
});

router.get("/0", (req, res) => {
    res.send("Veras que las actulizaciones del server en GITHUB son desde que lo tenia casi ya hecho y es porque no lo habia subido correctamente al principio y me di cuenta tarde, sorry ");
});


router.get("/1", (req, res) => {
    res.send("Probando que pasa si hay 2 rutas con el mismo nombre");
});

router.post("/rutapost", (req, res) => {
    res.send("Que pasara?");
    console.log("He entrado a la post");
});

router.get("/3", (req, res) => {
    console.log("Probando enlaces");
    res.send("https://www.youtube.com/watch?v=1vbZMpRTT5M");
});

router.get("/4", (req, res) => {
    console.log("Probando enlace con JSON");
    res.json({
        link: "https://www.youtube.com/watch?v=1vbZMpRTT5M"
    });
});

module.exports = router;