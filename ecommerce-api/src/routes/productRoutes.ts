import express from 'express';
import Product from '../models/Product';

const router = express.Router();

// Create Product
router.post('/', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
});

// Get All Products
router.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Get Product by ID
router.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

export default router;