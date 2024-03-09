const { Router } = require('express');
const { body } = require('express-validator');
const UsuarioController = require('../controllers/UsuarioController');
const autorizacao = require('../middlewares/autorizacao');

const usuarioRouter = Router();

usuarioRouter
  .post('/usuarios/', [
    body('nome').notEmpty().withMessage('E necessário inserir o Nome para continuar.'),
    body('nome').isString().withMessage('Nome tem de ser string.'),
    body('email').notEmpty().withMessage('E necessário inserir o Email para continuar.'),
    body('email').isEmail().withMessage('Email ter de ser um Email válido.'),
    body('senha').notEmpty().withMessage('E necessário inserir a Senha para continuar.'),
    body('senha').isStrongPassword().withMessage('A Senha precisa ser forte. Deve conter: "Letra maiúscula", "Caractere especial", "Valores numéricos".'),
  ], UsuarioController.adicionar)
  .get('/usuarios/', autorizacao, UsuarioController.exibirTodos)
  .get('/usuarios/:id', autorizacao, UsuarioController.exibirUm)
  .put('/usuarios/:id', autorizacao, UsuarioController.atualizar)
  .delete('/usuarios/:id', autorizacao, UsuarioController.deletar);

module.exports = usuarioRouter;
