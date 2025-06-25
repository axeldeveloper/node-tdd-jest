const request = require('supertest');
const app = require('../serve');
const { db, sqlite } = require('../db/');
const { posts } = require('../db/schema');

describe('Posts API CRUD Operations', () => {
  let createdPostId;

  beforeAll(async () => {
    // Limpa a tabela antes de cada teste
    await db.delete(posts).run();
  });

  afterAll(() => {
    // Fecha a conexão com o banco de dados
    sqlite.close();
  });

  // Teste para criação de post (CREATE)
  test('should create a new post', async () => {
    const response = await request(app)
      .post('/posts')
      .send({
        title: 'Test Post',
        content: 'This is a test content'
      })
      .expect(201);


    expect(response.body).toBeInstanceOf(Array)
    expect(response.body[0]).toHaveProperty('id');


    expect(response.body[0].title).toBe('Test Post');
    expect(response.body[0].content).toBe('This is a test content');

    createdPostId = response.body[0].id;
  });


  // Teste para leitura de post (READ)
  test('should get a post by id', async () => {
    const response = await request(app)
      .get(`/posts/${createdPostId}`)
      .expect(200);

    expect(response.body.id).toBe(createdPostId);
    expect(response.body.title).toBe('Test Post');
  });

  // Teste para listagem de posts (READ ALL)
  test('should list all posts', async () => {
    const response = await request(app)
      .get('/posts')
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });


  // Teste para atualização de post (UPDATE)
  test('should update a post', async () => {
    const updatedData = {
      title: 'Updated Test Post',
      content: 'Updated content'
    };

    const response = await request(app)
      .put(`/posts/${createdPostId}`)
      .send(updatedData)
      .expect(200);

    expect(response.body.title).toBe(updatedData.title);
    expect(response.body.content).toBe(updatedData.content);
  });


  /*
  // Teste para exclusão de post (DELETE)
  test('should delete a post', async () => {
    await request(app)
      .delete(`/posts/${createdPostId}`)
      .expect(200);

    // Verifica se o post foi realmente deletado
    const response = await request(app)
      .get(`/posts/${createdPostId}`)
      .expect(404);
  });

  // Testes de validação
  test('should return 400 when creating post with invalid data', async () => {
    await request(app)
      .post('/posts')
      .send({}) // Dados vazios
      .expect(400);
  });

  test('should return 404 when getting non-existent post', async () => {
    await request(app)
      .get('/posts/99999') // ID que não existe
      .expect(404);
  });*/


});