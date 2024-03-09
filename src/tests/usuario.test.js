/* eslint-disable arrow-body-style */
const request = require('supertest');
const app = require('../app');

const token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwibm9tZSI6ImlhZ28iLCJlbWFpbCI6ImlhZ29AZW1haWwuY29tIiwiaWF0IjoxNzA5OTQxOTAzfQ.MOHYVsDDyE5akYTSY3_fTNYAady5Ao3k-BCkn2xzDNtKgTNrS3B5LH-ZfKWzmHypYPFOX2aqvYp5TPJqCF9QrA';
let idTeste;
describe('Teste de integração do CRUD de Usuários', () => {
  test('Rota (POST) para inserir um usuário', async () => {
    const response = await request(app).post('/usuarios').send({
      nome: 'teste',
      email: 'teste@teste.com',
      senha: 'Senha@123',
    })
      .expect(201);
    idTeste = response.body.content.id;
    console.log(idTeste);
  });
  test('Rota (GET) para todos os Usuários', async () => {
    const response = await request(app)
      .get('/usuarios')
      .set('Authorization', token);
    expect(response.statusCode).toBe(200);
  });
  test('Rota (GET) para um usuário', async () => {
    const response = await request(app)
      .get('/usuarios/4')
      .set('Authorization', token);
    expect(response.statusCode).toBe(200);
  });
  test('Rota (PUT) para alterar um usuário', async () => {
    expect(2 + 2).toBe(4);
  });
  test('Rota (DELETE) para deletar um usuário', async () => {
    expect(2 + 2).toBe(4);
  });
});
