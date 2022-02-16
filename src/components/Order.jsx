import React from 'react';
import styles from '@styles/Order.module.scss';
import Image from 'next/image';

import arrow from '@icons/flechita.svg';

const Order = () => {
  return (
    <div className={styles.Order}>
      <div className={styles['item-details']}>
        <p className={styles['item-date']}>04.25.2021</p>
        <p className={styles['item-amount']}>6 articles</p>
      </div>
      <div className={styles['item-price']}>
        <p>$ 120,00</p>
        <Image src={arrow} alt="Ir al detalle de la orden" />
      </div>
    </div>
  );
};

export default Order;
