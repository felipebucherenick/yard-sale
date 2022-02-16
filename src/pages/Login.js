import React, { useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import styles from '@styles/Login.module.scss';

const Login = () => {
  const form = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      userEmail: formData.get('email'),
      password: formData.get('password'),
    };
    console.log(data);
  };
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.Login}>
        <div className={styles['Login__form-container']}>
          <form action="" className="form" ref={form}>
            <label htmlFor="email" className="label">
              Email address
            </label>
            <input name="email" type="email" className="input" placeholder="camilayokoo@gmail.com" />
            <label htmlFor="password" className="label">
              Password
            </label>
            <input name="password" type="password" className="input" placeholder="********" />

            <Link href="/" passHref>
              <button className="primary-button login-button" onClick={handleSubmit}>
                Log in
              </button>
            </Link>

            <Link href="/PasswordRecovery" className={styles['forgot-password']}>
              Forgot my password
            </Link>

            <Link href="/CreateAccount" passHref>
              <button className={`"secondary-button" ${styles['sign-up-button']}`}>Sing up</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
