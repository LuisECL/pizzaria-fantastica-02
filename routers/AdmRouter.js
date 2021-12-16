//importar o express
const express = require('express');
const ValidadorDeFormPizza = require('../middlewares/ValidadorDeFormParaPizza');

const multer = require('multer');
const storage = multer.diskStorage(
  {
    destination: (req, file, cb) => {cb(null, __dirname +  '/../public/img')},
    filename: (req, file, cb) => {cb(null, Date.now() + ' - ' + file.originalname)}
  }
);

const upload = multer({storage});

//importar os Controllers
const PizzasController=require('../controllers/PizzasController');
const AdmController = require('../controllers/AdmController');
const UsuarioLogado = require('../middlewares/UsuarioLogado');

//criar roteador
module.exports= router= express.Router();

router.get('/pizzas/create', UsuarioLogado, PizzasController.create)
router.post('/pizzas/create', upload.single('img'), ValidadorDeFormPizza, PizzasController.store);

router.get('/login', AdmController.showLogin);
router.post('/login', AdmController.login);