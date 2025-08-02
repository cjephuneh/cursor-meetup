   // src/app.ts

   import express, { Request, Response } from 'express';

   const app = express();
   const PORT = process.env.PORT || 3000;

   // Middleware to parse JSON bodies
   app.use(express.json());

   // In-memory storage for items
   let items: { id: number; name: string }[] = [];
   let nextId = 1;

   // Create an item
   app.post('/items', (req: Request, res: Response) => {
       const { name } = req.body;
       const newItem = { id: nextId++, name };
       items.push(newItem);
       res.status(201).json(newItem);
   });

   // Get all items
   app.get('/items', (req: Request, res: Response) => {
       res.json(items);
   });

   // Get an item by ID
   app.get('/items/:id', (req: Request, res: Response) => {
       const item = items.find(i => i.id === parseInt(req.params.id));
       if (item) {
           res.json(item);
       } else {
           res.status(404).send('Item not found');
       }
   });

   // Start the server
   app.listen(PORT, () => {
       console.log(`Server is running on http://localhost:${PORT}`);
   });

   export default app;