const { Router } = require("express");
const router = Router();

//Ruta GET
router.get("/rutaGetConRouter",  (req,res) => {
    res.send("Hola desde una web llamada en el servidor utilizando routes")
});



router.get("/rutaGet", (req, res) => {
    res.send("hola mundo desde el servidor");
});

//router.get("/0", (req, res) => {
//    res.send("Veras que las actulizaciones del server en GITHUB son desde que lo tenia casi ya hecho y es porque no lo habia subido correctamente al principio y me di cuenta tarde, sorry ");
//});


//router.get("/1", (req, res) => {
//    res.send("Probando que pasa si hay 2 rutas con el mismo nombre");
//});

router.post("/rutapost", (req, res) => {
    console.log(req.body.nombre);
    console.log(req.body.apellido);
    console.log(req.body.edad);
    console.log(req.body.nacionalidad);
    console.log(req.body.sexo);

    //res.send("Datos recibidos");
    console.log("He entrado a la post");
    res.json({
       nombre: req.body.nombre,
       apellido: req.body.apellido,
       edad: req.body.edad,
       nacionalidad: req.body.nacionalidad,
       sexo: req.body.sexo,
    
    })
    //res.redirect("http://localhost:8080/rutapost");
});

router.post("/rutapost2", (req, res) => {
    res.send("probando otra ruta");
    console.log("He entrado a la post");
});
router.post("/rutapost3", (req, res) => {
    res.send("tercera ruta para postman");
    console.log("He entrado a la post");
});
router.post("/rutapost4", (req, res) => {
    res.send("Probando enlace en POSTMAN");
    console.log("https://www.youtube.com/watch?v=1vbZMpRTT5M");
});
router.post("/POSTCONJSON", (req, res) => {
    console.log("Probando enlace con JSON");
    res.json({
        link: "https://www.youtube.com/watch?v=1vbZMpRTT5M"
    });
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