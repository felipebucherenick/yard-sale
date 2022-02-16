import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import Image from 'next/image';

import addToCartIcon from '@icons/bt_add_to_cart.svg';

import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className={styles.ProductItem}>
      <Image src={product?.images[0]} className={styles['ProductItem-img']} alt={product?.title} width="140px" height="140px" />
      <div className={styles['product-content']}>
        <div className={styles['product-details']}>
          <p>${product?.price}</p>
          <p>{product?.title}</p>
        </div>
        <figure className={styles['add-to-cart']} onClick={() => handleClick(product)} aria-hidden="true">
          <Image src={addToCartIcon} alt="Icono para agregar al carrito" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
