//importar o express
const express=require('express');

//importar o PizzasController
const PizzasController=require('../controllers/PizzasController')

//criar roteador
module.exports= router= express.Router();

router.get('/adm/pizzas/create', PizzasController.create)