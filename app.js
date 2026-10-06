const express = require("express");
const app = express();
const porta = 3000;

//indicar o diretório de arquivos estáticos - css js imagens
app.use(express.static("./app/public"));

//configurar o EJS
app.set("view engine", "ejs");
//indicar a pasta dos arquivos de HTML -> EJS
app.set("views","./app/views");

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
//requisições de módulos de rotas
const rota = require("./app/routes/router");

//utilizar as rotas obtidas
app.use("/", rota); // raiz do site / -> rotas públicas


//iniciar o servidor
app.listen(porta, ()=>{
    console.log(`Servidor on-line! \nhttp://localhost:${porta}`)
})