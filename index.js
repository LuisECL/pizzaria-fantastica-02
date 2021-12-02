
const express=require('express');

//importando a rotas//
const PizzasRouter=require('./routers/PizzasRouter');

//Criar o servidor//
const server=express();


//configurando o template endine do js
//criar o ejs
server.set("view engine", "ejs");

//caminho da pasta de views
//server.set('views', './views');

// Configurar a pasta public
server.use(express.static(__dirname + '/public'));


//criar a rota respondendo a requisição
server.use('/',PizzasRouter);

server.listen(3000,()=>{console.log("Servidor rodando na porta 3000")});

