const express = require('express');
const router = express.Router();

let products = [];

router.post('/', (req, res) => {
  const { name, description, price, quantity } = req.body;
  if (!name || !price || !quantity) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    description,
    price,
    quantity,
  };

  products.push(newProduct);
  res.status(201).json({ message: 'Product added', product: newProduct });
});

router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
