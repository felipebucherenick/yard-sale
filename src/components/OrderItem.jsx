import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import Image from 'next/image';

import close from '@icons/close.png';

import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };
  return (
    <div className={styles.OrderItem}>
      <div className={styles['OrderItem__item-details']}>
        <Image src={product?.images[0]} alt={product?.title} width={40} height={40} />
        <p>{product?.title}</p>
      </div>
      <div className={styles['item-price__container']}>
        <p className={styles['item-price']}>${product?.price}</p>
        <Image src={close} alt="Icon delete order" className={styles['OrderItem__close']} onClick={() => handleRemove(product)} />
      </div>
    </div>
  );
};

export default OrderItem;
