const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();
const {body, validationResult} = require("express-validator");

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

router.post("/formulario",
 body('nome')
    .trim()
    .notEmpty().withMessage("Preencha esse campo")
    .bail()
    .isLength({min:3})
    .withMessage("Nome deve ter no minimo três caracteres"),

 body('email')
    .trim()
    .notEmpty().withMessage("Preencha esse campo")
    .bail()
    .isEmail().withMessage("Insira um email válido"),

 body('telefone')
    .trim()
    .notEmpty().withMessage("Preencha esse campo")
    .bail()
    .isLength({min:11, max:11})
    .withMessage("Insira numero valido com DDD"),

 body('assunto')
    .trim()
    .notEmpty().withMessage("Preencha esse campo")
    .bail()
   .isLength({min:3})
   .withMassege("Assunto deve ter no minimo tres caracteres"),

 body('mensagem')
    .trim()
    .notEmpty().withMessage("Preencha esse campo")
    .bail()
    .isLength({min:3})
    .withMassege("Mensagem deve ter no minimo tres caracteres")
,(req, res)=>{
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
