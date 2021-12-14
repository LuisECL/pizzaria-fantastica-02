const { check, validationResult } = require('express-validator');

const validacoes = [
  check('nome')
    .notEmpty()
    .withMessage("O campo deve ser preenchido")
    .isLength({min:2, max:60})
    .withMessage('O campo nome deve ser preenchido com pelo menos 2 caracteres')
    .bail()
  ,
  check('ingredientes')
    .notEmpty()
    .withMessage('O campo ingredientes deve ser preenchido')
    .bail()
  ,
  check('preco')
    .isNumeric()
    .withMessage('O campo preço deve ser preenchido com um valor numérico')
    .bail()
]

module.exports = validacoes;