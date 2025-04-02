
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const products = [
  { id: 1, name: 'Planta Verde', price: 25 },
  { id: 2, name: 'Mini Cacto', price: 15 }
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="products">
      <h2>🌼 Produtos Disponíveis</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - R${product.price}
            <button onClick={() => dispatch(addToCart(product))}>Adicionar ao Carrinho</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
