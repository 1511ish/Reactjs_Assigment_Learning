import React, { useState } from 'react';
import styles from './AddProductForm.module.css';

const AddProductForm = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    quantity: { L: '', M: '', S: '' },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (['L', 'M', 'S'].includes(name)) {
      setProduct((prev) => ({
        ...prev,
        quantity: { ...prev.quantity, [name]: value },
      }));
    } else {
      setProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(product);
    setProduct({ name: '', description: '', price: '', quantity: { L: '', M: '', S: '' } });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input name="name" value={product.name} onChange={handleChange} placeholder="Name" required />
      <input name="description" value={product.description} onChange={handleChange} placeholder="Description" required />
      <input name="price" value={product.price} onChange={handleChange} placeholder="Price" type="number" required />
      <input name="L" value={product.quantity.L} onChange={handleChange} placeholder="Qty L" type="number" required />
      <input name="M" value={product.quantity.M} onChange={handleChange} placeholder="Qty M" type="number" required />
      <input name="S" value={product.quantity.S} onChange={handleChange} placeholder="Qty S" type="number" required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
