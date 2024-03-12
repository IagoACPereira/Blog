const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const Usuario = require('../models/Usuario');

class UsuarioController {
  static async adicionar(req, res) {
    const { nome, email, senha } = req.body;
    const resultado = validationResult(req);
    try {
      if (!resultado.isEmpty()) {
        throw new Error('Dados de entrada inválidos.');
      }
      const usuario = await Usuario.create({ nome, email, senha: await bcrypt.hash(senha, 10) });
      res.status(201).json({
        mensagem: `Usuário ${usuario.nome} adicionado com sucesso.`,
        usuario,
        status: 201,
      });
    } catch (error) {
      if (error.message === 'Dados de entrada inválidos.') {
        res.status(400).json({
          mensagem: error.message,
          erros: resultado.array(),
          status: 400,
        });
      } else {
        res.status(500).json({
          mensagem: 'Ocorreu um erro no servidor.',
          erro: error.message,
          status: 500,
        });
      }
    }
  }

  static async exibirTodos(req, res) {
    try {
      const usuarios = await Usuario.findAndCountAll();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({
        mensagem: 'Ocorreu um erro no servidor.',
        erro: error.message,
        status: 500,
      });
    }
  }

  static async exibirUm(req, res) {
    const { id } = req.params;
    try {
      const usuario = await Usuario.findOne({
        where: { id },
      });
      if (!usuario) {
        throw new Error(`Não existe Usuário com o id ${id}`);
      }
      res.status(200).json(usuario);
    } catch (error) {
      if (error.message === `Não existe Usuário com o id ${id}`) {
        res.status(400).json({
          mensagem: error.message,
          status: 400,
        });
      } else {
        res.status(500).json({
          mensagem: 'Ocorreu um erro no servidor.',
          erro: error.message,
          status: 500,
        });
      }
    }
  }

  static async atualizar(req, res) {
    const { nome, email, senha } = req.body;
    const { id } = req.params;
    try {
      const usuario = await Usuario.findOne({
        where: { id },
      });
      if (!usuario) {
        throw new Error(`Não existe Usuário com o id ${id}`);
      }
      await Usuario.update({ nome, email, senha: await bcrypt.hash(senha, 10) }, {
        where: { id },
      });
      res.status(200).json({
        mensagem: 'Usuário atualizado com sucesso.',
        status: 200,
      });
    } catch (error) {
      if (error.message === `Não existe Usuário com o id ${id}`) {
        res.status(400).json({
          mensagem: error.message,
          status: 400,
        });
      } else {
        res.status(500).json({
          mensagem: 'Ocorreu um erro no servidor.',
          erro: error.message,
          status: 500,
        });
      }
    }
  }

  static async deletar(req, res) {
    const { id } = req.params;
    try {
      const usuario = await Usuario.findOne({
        where: { id },
      });
      if (!usuario) {
        throw new Error(`Não existe Usuário com o id ${id}`);
      }
      await Usuario.destroy({
        where: { id },
      });
      res.status(200).json({
        mensagem: 'Usuário deletado com sucesso.',
        status: 200,
      });
    } catch (error) {
      if (error.message === `Não existe Usuário com o id ${id}`) {
        res.status(400).json({
          mensagem: error.message,
          status: 400,
        });
      } else {
        res.status(500).json({
          mensagem: 'Ocorreu um erro no servidor.',
          erro: error.message,
          status: 500,
        });
      }
    }
  }
}

module.exports = UsuarioController;
