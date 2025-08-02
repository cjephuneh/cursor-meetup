import request from 'supertest';
import app from '../src/app';
import mongoose from 'mongoose';

beforeAll(async () => {
    await mongoose.connect('mongodb+srv://bricklabsai:zjKtsNBTc6s02i8J@cursor-meetup.ttio4en.mongodb.net/');
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Product API', () => {
    it('should create a new product', async () => {
        const response = await request(app)
            .post('/api/products')
            .send({ name: 'Test Product', price: 100, description: 'A test product', stock: 10 });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('name', 'Test Product');
    });

    it('should get all products', async () => {
        const response = await request(app).get('/api/products');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});