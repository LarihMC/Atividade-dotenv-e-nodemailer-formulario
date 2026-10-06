const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("pages/forms", {titulo:"Formulario 2026"});
});


module.exports = router;
