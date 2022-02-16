import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import styles from '@styles/PasswordRecovery.module.scss';

const PasswordRecovery = () => {
  return (
    <>
      <Head>
        <title>Password Recovery</title>
      </Head>
      <div className={styles.PasswordRecovery}>
        <div className={styles['PasswordRecovery__form-container']}>
          <h1 className="title">Password Recovery</h1>
          <p className="subtitle">Inform the email address used to create your account</p>
          <form action="" className="form">
            <label htmlFor="email" className="label">
              Email address
            </label>
            <input id="email" type="email" className="input" placeholder="camilayokoo@gmail.com" />

            <Link href="/PasswordRecoverySentEmail" passHref>
              <input type="submit" className="primary-button login-button" value="Submit" />
            </Link>

            <Link href="/Login" className={styles['PasswordRecovery__back-login']}>
              Back to log in
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default PasswordRecovery;
