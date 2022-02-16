import React from 'react';
import Image from 'next/image';
import useGetProducts from '@hooks/useGetProducts';

import ProductItem from '@components/ProductItem';
import NavBarMobile from '@components/NavBarMobile';

import downArrow from '@icons/down-arrow.png';

import styles from '@styles/ProductsList.module.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductsList = () => {
  const products = useGetProducts(API);
  return (
    <section className={styles.ProductsList}>
      <div className={styles['ProductsList__top']}>
        <input type="text" className={styles['search-bar']} placeholder="Search product" />
        <NavBarMobile />
        <div className={styles['order-by']}>
          <p>Order: </p>
          <p>Most Recent</p>
          <Image src={downArrow} alt="" />
        </div>
      </div>
      <div className={styles['Products-container']}>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;
