// CartButton.js
import React from 'react';
import styles from './CartButton.module.css';

const CartButton = ({ onClick, itemCount }) => {
  return (
    <button onClick={onClick} className={styles.cartButton}>
      Cart {itemCount > 0 ? `(${itemCount})` : ''}
    </button>
  );
};

export default CartButton;
