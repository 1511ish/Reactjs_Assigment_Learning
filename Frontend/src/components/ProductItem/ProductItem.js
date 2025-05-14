// ProductItem.js
import React from 'react';
import styles from './ProductItem.module.css';

const ProductItem = ({ product, onBuy }) => {
  const { name, description, price, quantity } = product;

  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ₹{price}</p>
      <button
        onClick={() => onBuy(product, 'L')}
        disabled={quantity.L <= 0}
      >
        Buy L ({quantity.L})
      </button>
      <button
        onClick={() => onBuy(product, 'M')}
        disabled={quantity.M <= 0}
      >
        Buy M ({quantity.M})
      </button>
      <button
        onClick={() => onBuy(product, 'S')}
        disabled={quantity.S <= 0}
      >
        Buy S ({quantity.S})
      </button>
    </div>
  );
};

export default ProductItem;
