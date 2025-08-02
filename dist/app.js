"use strict";
// src/app.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware to parse JSON bodies
app.use(express_1.default.json());
// In-memory storage for items
let items = [];
let nextId = 1;
// Create an item
app.post('/items', (req, res) => {
    const { name } = req.body;
    const newItem = { id: nextId++, name };
    items.push(newItem);
    res.status(201).json(newItem);
});
// Get all items
app.get('/items', (req, res) => {
    res.json(items);
});
// Get an item by ID
app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (item) {
        res.json(item);
    }
    else {
        res.status(404).send('Item not found');
    }
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
exports.default = app;
