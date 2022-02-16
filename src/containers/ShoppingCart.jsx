import React, { useContext } from 'react';
import Link from 'next/link';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';

import styles from '@styles/ShoppingCart.module.scss';

const ShoppingCart = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accum, currentValue) => accum + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className={styles.ShoppingCart}>
      <section className={styles['ShoppingCart-container']}>
        <h1 className={styles['ShoppingCart__title']}>Shopping cart</h1>
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}

        <div className={styles['ShoppingCart__total-details']}>
          <p>Total</p>
          <p className="total">${sumTotal()}</p>
        </div>

        <Link href="/MyOrder" passHref>
          <button className="primary-button login-button">Checkout</button>
        </Link>
      </section>
    </div>
  );
};

export default ShoppingCart;
