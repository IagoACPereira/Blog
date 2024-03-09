const { Router } = require('express');
const { body } = require('express-validator');
const PostagemController = require('../controllers/PostagemController');
const autorizacao = require('../middlewares/autorizacao');

const postagemRouter = Router();

postagemRouter
  .post('/postagens/', autorizacao, [
    body('titulo').notEmpty().withMessage('É necessário inserir um Título para continuar.'),
    body('titulo').isString().withMessage('Conteúdo tem de ser string'),
    body('conteudo').notEmpty().withMessage('É necessário inserir um Conteúdo para continuar.'),
    body('conteudo').isString().withMessage('Conteúdo tem de ser string'),
    body('dataDeCriacao').notEmpty().withMessage('É necessário inserir uma Data de Criação para continuar.'),
    body('dataDeCriacao').isString().withMessage('Conteúdo tem de ser string'),
    body('usuarioId').notEmpty().withMessage('É necessário inserir um Usuário para continuar.'),
    body('usuarioId').isInt().withMessage('Conteúdo tem de ser número inteiro'),
  ], PostagemController.adicionar)
  .get('/postagens/', PostagemController.exibirTodos)
  .get('/postagens/:id', PostagemController.exibirUm)
  .put('/postagens/:id', autorizacao, PostagemController.atualizar)
  .delete('/postagens/:id', autorizacao, PostagemController.deletar)
  .put('/postagens/:id/curtir/', autorizacao, PostagemController.curtir)
  .put('/postagens/:id/descurtir/', autorizacao, PostagemController.descurtir);

module.exports = postagemRouter;
