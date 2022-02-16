import React from 'react';
import Head from 'next/head';

import styles from '@styles/Account.module.scss';
import Link from 'next/link';

const CreateAccount = () => {
  return (
    <>
      <Head>
        <title>Create Account</title>
      </Head>
      <div className={styles.Account}>
        <div className={styles['form-container']}>
          <h1 className="title">My account</h1>
          <form action="" className="form">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input id="name" type="name" className="input" placeholder="Camila Yokoo" />
            <label htmlFor="email" className="label">
              Email address
            </label>
            <input id="email" type="email" className="input" placeholder="camilayokoo@gmail.com" />
            <label htmlFor="password" className="label">
              Password
            </label>
            <input id="password" type="password" className="input" placeholder="********" />
            <Link href="/" passHref>
              <input type="submit" className="primary-button account-button" value="Create" />
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
