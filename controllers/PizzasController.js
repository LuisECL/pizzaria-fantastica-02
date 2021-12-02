const pizzas=require('../database/Pizzas.json')

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
    }

}