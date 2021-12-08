const pizzas=require('../database/Pizzas.json')
const fs = require('fs');
const { stringify } = require('querystring');

//importar o controller
module.exports=controller ={
    listar:(req,res)=>{
        return res.render('index',{pizzas, busca:""});
    },

    getPizza:(req,res) =>{
        // capturar o id requisitado (req.params)
        const idPizza=req.params.id;
        //capturar do array a pizza com o id requisitado (pizzas.find)
        const pizza= pizzas.find(p =>p.id==idPizza);

        //retorna a pizza encontrada para o cliente(res.send())
        res.render('pizza',{pizza});

    },

    busca: (req, res) => {
        // Capturar a string digitada pelo visitante
        const string = req.query.q.trim();

        // Filtrar do array de pizzas somente as pizzas
        // que tiverem a string buscada no nome
        const pizzasFiltradas = pizzas.filter(
            p => p.nome.toUpperCase().includes(string.toUpperCase())
        );

        //Renderizar a view index passando para ela
        // as pizzas filtradas
        res.render('index', {pizzas:pizzasFiltradas, busca:string});
    },

    create: (req, res) => {
        res.render('crud-pizzas/create');
    },

    store: (req, res) => {
        // return res.send(req.body);
        const nome = req.body.nome;
        const ingredientes = req.body.ingredientes.split(',').map(a => a.trim());
        const preco = Number(req.body.preco);

        const pizza = {nome, ingredientes, preco, img:'/img/' + req.file.filename}


        //Adidionar o id à pizza recém criada
        pizza.id = pizzas[pizzas.length -1].id + 1;

        // Adicionar a pizza ao array de pizzas
        pizzas.push(pizza);

        // Salvar o json do array de pizzas no arquivo Pizzas.json
        // fs.writeFileSync(...)
        fs.writeFileSync(__dirname + '/../database/Pizzas.json', JSON.stringify(pizzas, null, 4), {flag:'w'});

        // Direcionar o usuário para a página que exibe a lista de pizzas
        res.redirect('/');

    }

}