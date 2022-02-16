import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '@styles/Account.module.scss';

const MyAccount = () => {
  return (
    <>
      <Head>
        <title>My Account</title>
      </Head>
      <div className={styles.Account}>
        <div className={styles['form-container']}>
          <h1 className="title">My account</h1>
          <form action="" className="form">
            <label htmlFor="name" className="label">
              Name
            </label>
            <p className="value">Camila Yokoo</p>
            <label htmlFor="email" className="label">
              Email address
            </label>
            <p className="value">camilayokoo@gmail.com</p>
            <label htmlFor="password" className="label">
              Password
            </label>
            <p className="value">********</p>
            <Link href="/MyAccountEdit" passHref>
              <input type="submit" className="secondary-button account-button" value="Edit" />
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
