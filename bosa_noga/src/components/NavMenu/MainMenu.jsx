import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const navLinks = [
  { to: '/', title: 'Главная' },
  { to: '/api/items', title: 'Каталог' },
  { to: '/about', title: 'О магазине' },
  { to: '/contacts', title: 'Контакты' },
];

function NavMenu() {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  // Получаем данные корзины из Redux
  const cart = useSelector((state) => state.cart);
  const cartItemCount = cart.length; // Количество уникальных позиций в корзине

  const toggleSearch = () => {
    if (isSearchVisible && searchText.trim() !== '') {
      navigate(`/api/items?search=${encodeURIComponent(searchText.trim())}`);
    } else {
      setSearchVisible(!isSearchVisible);
    }
  };

  useEffect(() => {
    if (isSearchVisible) {
      searchInputRef.current.focus();
    }
  }, [isSearchVisible]);

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src="/img/header-logo.png?v=1" alt="Bosa Noga" />
      </Link>
      <div className="collapse navbar-collapse" id="navbarMain">
        <ul className="navbar-nav mr-auto">
          {navLinks.map((link, index) => (
            <li key={index} className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                to={link.to}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div>
          <div className="header-controls-pics">
            <div
              data-id="search-expander"
              className="header-controls-pic header-controls-search"
              onClick={toggleSearch}
            />
            <Link className="header-controls-pic header-controls-cart" to="/order">
              {cartItemCount > 0 && ( // Показываем только если в корзине есть товары
                <div className="header-controls-cart-full">{cartItemCount}</div>
              )}
              <div className="header-controls-cart-menu" />
            </Link>
          </div>
          <form
            data-id="search-form"
            className={`header-controls-search-form form-inline ${
              isSearchVisible ? '' : 'invisible'
            }`}
            onSubmit={(e) => {
              e.preventDefault();
              toggleSearch();
            }}
          >
            <input
              ref={searchInputRef}
              className="form-control"
              placeholder="Поиск"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
