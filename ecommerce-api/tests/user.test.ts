import request from 'supertest';
import app from '../src/app'; // Adjust the import if necessary
import mongoose from 'mongoose';

beforeAll(async () => {
    await mongoose.connect('mongodb+srv://bricklabsai:zjKtsNBTc6s02i8J@cursor-meetup.ttio4en.mongodb.net/');
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('User API', () => {
    it('should register a new user', async () => {
        const response = await request(app)
            .post('/api/users/register')
            .send({ username: 'testuser', password: 'password', email: 'test@example.com' });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('message', 'User registered successfully');
    });

    it('should login a user', async () => {
        const response = await request(app)
            .post('/api/users/login')
            .send({ username: 'testuser', password: 'password' });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
    });
});