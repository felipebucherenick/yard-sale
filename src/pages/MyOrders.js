import React from 'react';
import Head from 'next/head';
import Order from '@components/Order';
import styles from '@styles/MyOrders.module.scss';

const MyOrders = () => {
  return (
    <>
      <Head>
        <title>My Orders</title>
      </Head>
      <div className={styles.MyOrders}>
        <section className={styles['MyOrders-container']}>
          <h1 className={styles['MyOrders__title']}>My Orders</h1>

          <Order />
        </section>
      </div>
    </>
  );
};

export default MyOrders;
