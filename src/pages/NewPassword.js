import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '@styles/NewPassword.module.scss';

const NewPassword = () => {
  return (
    <>
      <Head>
        <title>New Password</title>
      </Head>
      <div className={styles.NewPassword}>
        <div className={styles['form-container']}>
          <h1 className="title">Create a new password</h1>
          <p className="subtitle">Enter a new password for your account</p>
          <form action="" className="form">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input id="password" type="password" className="input input-password" placeholder="********" />
            <label htmlFor="re-enter-password" className="label">
              Re-enter password
            </label>
            <input id="re-enter-password" type="password" className="input re-enter-password" placeholder="********" />
            <Link href="/" passHref>
              <input type="submit" className="primary-button login-button" value="Confirm" />
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewPassword;
