import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import notFoundImg from '@icons/error-page.png';

import styles from '@styles/NotFound.module.scss';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <div className={styles.NotFound}>
        <Image src={notFoundImg} alt="" />
        <p>Error 404 Not Found</p>
      </div>
    </>
  );
};

export default NotFound;
