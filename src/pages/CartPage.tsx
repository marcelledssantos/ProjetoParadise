
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeFromCart } from '../redux/cartSlice';

const CartPage = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>🛒 Carrinho</h2>
      {items.length === 0 ? <p>Seu carrinho está vazio.</p> : (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} - R${item.price}
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remover</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: R${total}</h3>
    </div>
  );
};

export default CartPage;
