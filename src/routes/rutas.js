const { Router } = require("express");
const router = Router();

//Ruta GET
router.get("/rutaGetConRouter",  (req,res) => {
    res.send("Hola desde una web llamada en el servidor utilizando routes")
});

//Ruta POST

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