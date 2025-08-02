   // src/routes/orderRoutes.ts

   import express from 'express';
   import Order from '../models/Order';

   const router = express.Router();

   // Create Order
   router.post('/', async (req, res) => {
       try {
           const order = new Order(req.body);
           await order.save();
           res.status(201).json(order);
       } catch (error) {
           console.error('Error creating order:', error);
           res.status(500).json({ message: 'Failed to create order' });
       }
   });

   export default router;