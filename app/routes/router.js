const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config()

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        secure: false,
        ignoreTLS: true,
        rejectUnauthorized: false,
    }
});


router.get("/", (req, res)=>{
    res.render("pages/forms", {titulo:"Formulario 2026"});
});

router.post("/formulario", (req, res)=>{
    const mailOptions = {
    from: process.env.EMAIL_USER,
    to: req.body.email,
    subject: req.body.assunto,
    text: req.body.mensagem,
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log(info);
        console.log("email enviado");
    }
});

})

module.exports = router;
