const { Router } = require("express");
const router = Router();

//Rutas GET
router.get("/rutaget",  (req,res) => {
    console.log(req.body.nombre);
    console.log(req.body.apellido);
    console.log(req.body.edad);
    console.log(req.body.nacionalidad);
    console.log(req.body.sexo);

    res.send("Datos recibidos");
    console.log("He entrado a la ruta get");
    
});
router.get("/rutaget2",  (req,res) => {
    res.send("probando ruta2")
});
router.get("/rutaget3", (req, res) => {
    console.log("Probando enlaces");
    res.send("https://www.youtube.com/watch?v=1vbZMpRTT5M");
    console.log("He entrado a la ruta get");
});


router.get("/rutaget4", (req, res) => {
    console.log("Probando ruta igual");
    res.send("https://www.youtube.com/watch?v=1vbZMpRTT5M");
    console.log("He entrado a la ruta get");
});

router.get("/rutaget5", (req, res) => {
    console.log("Probando ruta contenido vacio");
    res.send("https://www.youtube.com/watch?v=1vbZMpRTT5M");
    console.log("He entrado a la ruta get");
});

//Rutas POST

router.post("/rutapost", (req, res) => {
    console.log(req.body.nombre);
    console.log(req.body.apellido);
    console.log(req.body.edad);
    console.log(req.body.nacionalidad);
    console.log(req.body.sexo);

    res.send("Datos recibidos");
    //console.log("He entrado a la post");
    //res.json({
    //   nombre: req.body.nombre,
    //   apellido: req.body.apellido,
    //   edad: req.body.edad,
    //   nacionalidad: req.body.nacionalidad,
    //   sexo: req.body.sexo,
    //
    //})
    //res.redirect("http://localhost:8080/rutapost");
});
router.post("/rutapost2", (req, res) => {
    console.log(" probando ruta contenido vacio en POST ");
    res.send("");
    console.log("He entrado a la ruta post");
});
router.post("/rutapost3", (req, res) => {
    console.log(" probando enlace en POST");
    res.send("https://www.youtube.com/watch?v=1vbZMpRTT5M");
    console.log("He entrado a la ruta post");
});

router.post("/rutapost4", (req, res) => {
    console.log(" probando enlace en POST");
    res.send("");
    console.log("He entrado a la ruta post");
});



module.exports = router;