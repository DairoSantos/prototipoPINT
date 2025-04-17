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



module.exports = router;