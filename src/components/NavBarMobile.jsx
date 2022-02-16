import React from 'react';
import Link from 'next/link';

import styles from '@styles/NavBarMobile.module.scss';

const NavBarMobile = () => {
  return (
    <div className={styles.NavBarMobile}>
      <ul>
        <li>
          <Link href="/">All</Link>
        </li>
        <li>
          <Link href="/">Clothes</Link>
        </li>
        <li>
          <Link href="/">Electronics</Link>
        </li>
        <li>
          <Link href="/">Forniture</Link>
        </li>
        <li>
          <Link href="/">Toys</Link>
        </li>
        <li>
          <Link href="/">Others</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBarMobile;
