import React from 'react';
import styles from './CartModal.module.css';

const CartModal = ({ cartItems, onClose, onOrder }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles.modal}>
      <h2>Cart</h2>
      {cartItems.map((item, idx) => (
        <div key={idx}>
          <p>{item.name} (Size: {item.size}) - ₹{item.price}</p>
        </div>
      ))}
      <hr />
      <p>Total: ₹{totalPrice}</p>
      <button onClick={onOrder} className={styles.orderBtn}>Order</button>
      <button onClick={onClose} className={styles.cancelBtn}>Cancel</button>
    </div>
  );
};

export default CartModal;
