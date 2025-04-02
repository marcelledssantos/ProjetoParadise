
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Header = () => {
  const cartCount = useSelector((state: RootState) => state.cart.items.length);
  return (
    <header className="header">
      <img src="/logo.png" alt="Paradise Nursery" height="50" />
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Produtos</Link> | <Link to="/cart">Carrinho ({cartCount})</Link>
      </nav>
    </header>
  );
};

export default Header;
