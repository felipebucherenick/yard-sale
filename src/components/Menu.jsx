import React from 'react';
import Link from 'next/link';
import styles from '@styles/Menu.module.scss';

const Menu = () => {
  return (
    <div className={styles.Menu}>
      <ul className={styles['categories']}>
        <li>
          <h2 className="title">CATEGORIES</h2>
        </li>
        <li>
          <Link href="/" passHref>
            <p>All</p>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <p>Clothes</p>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <p>Electronics</p>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <p>Furnitures</p>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <p>Toys</p>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <p>Others</p>
          </Link>
        </li>
      </ul>
      <ul className={styles['my-orders']}>
        <li>
          <Link href="/MyOrders" passHref>
            <p>My orders</p>
          </Link>
        </li>
        <li>
          <Link href="/MyAccount" passHref>
            <p>My account</p>
          </Link>
        </li>
      </ul>
      <ul className={styles['sign-out-container']}>
        <li>
          <p>camilayokoo@gmail.com</p>
        </li>
        <li>
          <Link href="/Login" passHref>
            <p className={styles['sign-out']}>Sign out</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
