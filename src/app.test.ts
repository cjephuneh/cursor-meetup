   // src/app.test.ts

import request from 'supertest';
import app from './app';

describe('Items API', () => {
    it('should create a new item', async () => {
           const response = await request(app)
               .post('/items')
               .send({ name: 'Test Item' });
           expect(response.status).toBe(201);
           expect(response.body).toHaveProperty('id');
           expect(response.body.name).toBe('Test Item');
       });

       it('should get all items', async () => {
           const response = await request(app).get('/items');
           expect(response.status).toBe(200);
           expect(Array.isArray(response.body)).toBe(true);
       });
   });