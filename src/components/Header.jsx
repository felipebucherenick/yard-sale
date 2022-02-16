import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import AppContext from '@context/AppContext';

import ShoppingCart from '@containers/ShoppingCart';
import NavBar from '@components/NavBar';
import Menu from '@components/Menu';
import HomeMenu from '@components/HomeMenu';

import iconMenu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import iconShopingCart from '@icons/icon_shopping_cart.svg';
import downArrow from '@icons/down-arrow.png';

import styles from '@styles/Header.module.scss';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleHomeMenu, setToggleHomeMenu] = useState(false);
  const [toggleShoppingCart, setToggleShoppingCart] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleToggleHomeMenu = () => {
    setToggleHomeMenu(!toggleHomeMenu);
  };

  const handleToggleShoppingCart = () => {
    setToggleShoppingCart(!toggleShoppingCart);
  };

  return (
    <header className={styles.Header}>
      <div className={styles['Header__mobile-menu']} onClick={handleToggleMenu} aria-hidden="true">
        <Image src={iconMenu} alt="Menu" />
      </div>

      <Link href="/" passHref>
        <Image src={logo} alt="Logo" className={styles['Header__logo']} />
      </Link>

      <NavBar />
      <div className={styles['Header__right']}>
        <div className={styles['email-container']} onClick={handleToggleHomeMenu} aria-hidden="true">
          <p className={styles.email}>camilayokoo@gmail.com</p>
          <Image src={downArrow} alt="" className={styles['down-arrow']} />
        </div>
        <div className={styles['Header__shoping-cart']} onClick={handleToggleShoppingCart} aria-hidden="true">
          <Image src={iconShopingCart} alt="Carrito de compras" />
          {state.cart.length > 0 ? <div className={styles['shoping-cart__counter']}>{state.cart.length}</div> : null}
        </div>
      </div>
      {toggleMenu && <Menu />}
      {toggleHomeMenu && <HomeMenu />}
      {toggleShoppingCart && <ShoppingCart />}
    </header>
  );
};

export default Header;
