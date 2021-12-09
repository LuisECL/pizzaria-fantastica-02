
const express=require('express');

//importando a rotas//
const PizzasRouter=require('./routers/PizzasRouter');
const AdmRouter = require('./routers/AdmRouter');

// Importando os middlewares
const LogMiddleware = require('./middlewares/LogMiddleware');

//Criar o servidor//
const app = express();


//configurando o template endine do js
//criar o ejs
app.set("view engine", "ejs");

//caminho da pasta de views
//server.set('views', './views');

// Configurando o processamento de formulários
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware de LOG
// app.use(LogMiddleware);

// Configurar a pasta public
app.use(express.static(__dirname + '/public'));


//criar a rota respondendo a requisição
app.use('/', PizzasRouter);
app.use('/adm', LogMiddleware, AdmRouter);

app.listen(3000,()=>{console.log("Servidor rodando na porta 3000")});

