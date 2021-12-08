//importar o express
const express = require('express');
const multer = require('multer');
const storage = multer.diskStorage(
  {
    destination: (req, file, cb) => {cb(null, __dirname +  '/../public/img')},
    filename: (req, file, cb) => {cb(null, Date.now() + ' - ' + file.originalname)}
  }
);

const upload = multer({storage});

//importar o PizzasController
const PizzasController=require('../controllers/PizzasController')

//criar roteador
module.exports= router= express.Router();

router.get('/pizzas/create', PizzasController.create)
router.post('/pizzas/create', upload.single('img'), PizzasController.store);