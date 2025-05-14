const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
