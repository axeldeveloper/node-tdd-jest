const request = require('supertest');
const app = require('../serve');


describe('GET /api/user', () => {

  it('should return user data', async () => {
    const response = await request(app).get('/api/user');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('name');
    expect(response.body.name).toBe('Axel Patton');
  });

  it('should return 404 for non-existent route', async () => {
    const response = await request(app).get('/api/nonexistent');
    expect(response.statusCode).toBe(404);
  });

});