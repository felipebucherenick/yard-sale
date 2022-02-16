import React from 'react';
import Link from 'next/link';
import styles from '@styles/HomeMenu.module.scss';

const HomeMenu = () => {
  return (
    <div className={styles.HomeMenu}>
      <ul className={styles['HomeMenu-list']}>
        <li>
          <Link href="/MyOrders">My orders</Link>
        </li>
        <li>
          <Link href="/MyAccount">My account</Link>
        </li>
        <li className={styles['sign-out-container']}>
          <Link href="/Login" className={styles['sign-out']}>
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeMenu;
