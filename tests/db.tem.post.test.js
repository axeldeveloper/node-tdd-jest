const request = require('supertest');


describe('Posts API', () => {

  test('GET /posts should return a list of posts', async () => {
    const response = await request('http://localhost:3001')
      .get('/posts')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);
  });

  test('deve retornar as 2 últimas postagens', async () => {
    const res = await request('http://localhost:3001')
      .get('/posts?_sort=id&_order=desc&_limit=2');

    expect(res.status).toBe(200);
    expect(res.body.length).toBe(2);
    expect(Number(res.body[0].id)).toBe(1);
    expect(Number(res.body[1].id)).toBe(2);
  });

});