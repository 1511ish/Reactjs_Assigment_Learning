const express = require('express');
const router = express.Router();

let cart = [];

router.post('/', (req, res) => {
  const { name, size, price } = req.body;
  if (!name || !size || !price) {
    return res.status(400).json({ message: 'Missing cart item fields' });
  }

  const newCartItem = { name, size, price };
  cart.push(newCartItem);

  res.status(201).json({ message: 'Item added to cart', cart: newCartItem });
});

router.get('/', (req, res) => {
  res.json(cart);
});

module.exports = router;
