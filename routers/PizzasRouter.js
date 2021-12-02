//importar o express
const express=require('express');

//importar o PizzasController
const PizzasController=require('../controllers/PizzasController')

//criar roteador
module.exports= router= express.Router();

//definir rotas as quais ele respode
router.get('/', PizzasController.listar);
router.get('/pizzas',PizzasController.listar);
router.get('/pizzas/:id',PizzasController.getPizza);
router.get('/busca', PizzasController.busca)
