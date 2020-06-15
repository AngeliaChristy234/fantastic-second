import React from 'react';

const Header = () => (
  <div>
    <img alt="" className="header__logo"/>
    <a href="#" className="header__kategori">Kategori</a>
    <div className="header__searchbar">
      <input
        type="text"
        className="searchbar searchbar--small"
        placeholder="Cari barang"/>
    </div>
    <div className="header__button">
      <button className="button__signin">Sign In</button>
      <button className="button__login">Log In</button>
    </div>
    <div className="header__icon">
      <img src="img/icon-heart.png" alt="" className="header__icon--wishlist"/>
      <div className="header__icon--cart">
        <span className="cart__number">1</span>
        <img src="img/icon-cart.png" alt="" className="cart__icon"/>
      </div>
    </div>
  </div>
)

export default Header;