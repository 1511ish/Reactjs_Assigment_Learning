import React from 'react';
import ProductItem from '../ProductItem/ProductItem';

const ProductList = ({ products, onBuy }) => {
  return (
    <div>
      {products.map((product, idx) => (
        <ProductItem key={idx} product={product} onBuy={onBuy} />
      ))}
    </div>
  );
};

export default ProductList;
