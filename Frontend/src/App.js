// App.js
import React, { useState } from 'react';
import AddProductForm from './components/AddProductForm/AddProductForm';
import ProductList from './components/ProductList/ProductList';
import CartModal from './components/CartModal/CartModal';
import CartButton from './components/CartButton/CartButton';
import styles from './App.module.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleBuy = (product, size) => {
    if (product.quantity[size] > 0) {
      // Update quantity
      const updatedProducts = products.map((p) => {
        if (p === product) {
          return {
            ...p,
            quantity: {
              ...p.quantity,
              [size]: p.quantity[size] - 1,
            },
          };
        }
        return p;
      });

      setProducts(updatedProducts);

      // Add to cart
      setCart([
        ...cart,
        { name: product.name, size, price: Number(product.price) },
      ]);
    }
  };

  const handleOrder = () => {
    alert('Order Placed!');
    setCart([]);
    setShowCart(false);
  };

  return (
    <div className={styles.appContainer}>
      <CartButton onClick={() => setShowCart(true)} itemCount={cart.length} />
      <AddProductForm onAddProduct={handleAddProduct} />
      <ProductList products={products} onBuy={handleBuy} />
      {showCart && (
        <CartModal
          cartItems={cart}
          onClose={() => setShowCart(false)}
          onOrder={handleOrder}
        />
      )}
    </div>
  );
};

export default App;
