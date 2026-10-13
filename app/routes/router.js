const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
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

transporter.sendMail(data[callback])

const mailOptions = {
    from: process.env.EMAIL_USER,
    to: req.body.email,
    subject: req.body.assunto,
    text: req.body.mensagem,
    html: "<h1>BORA BK HJ?</h1>"
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log(info);
        console.log("email enviado");
    }
});

router.get("/", (req, res)=>{
    res.render("pages/forms", {titulo:"Formulario 2026"});
});


module.exports = router;
