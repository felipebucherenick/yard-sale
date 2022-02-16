import React from 'react';
import Head from 'next/head';
import OrderItem from '@components/OrderItem';
import styles from '@styles/MyOrder.module.scss';
import AppContext from '@context/AppContext';

const MyOrder = () => {
  const { state } = React.useContext(AppContext);
  const { cart } = state;
  return (
    <>
      <Head>
        <title>My Order</title>
      </Head>
      <div className={styles.MyOrder}>
        <section className={styles['MyOrder-container']}>
          <h1 className={styles['MyOrder__title']}>My Order</h1>

          <div className={styles['MyOrder__total']}>
            <div className={styles['total-details']}>
              <p className={styles['total-date']}>04.25.2021</p>
              <p className={styles['total-amount']}>6 articles</p>
            </div>
            <p className={styles['total-price']}>$560,00</p>
          </div>
          {cart.map((item) => (
            <OrderItem product={item} key={item.id} />
          ))}
        </section>
      </div>
    </>
  );
};

export default MyOrder;
