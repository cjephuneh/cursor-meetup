// tests/order.test.ts

import request from 'supertest';
import app from '../src/app';
import mongoose from 'mongoose';

beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/ecommerce-test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Order API', () => {
    it('should create a new order', async () => {
        const response = await request(app)
            .post('/api/orders')
            .send({
                user: 'userId', // Replace with a valid user ID from your database
                products: [{ product: 'productId', quantity: 2 }], // Replace with valid product IDs
                total: 200,
            });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('total', 200);
    });
});