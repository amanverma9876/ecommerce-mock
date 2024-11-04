import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">Amazon</Link>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
    </header>
  );
}

export default Header;
