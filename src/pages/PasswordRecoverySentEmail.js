import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import emailIcon from '@icons/email.svg';

import styles from '@styles/PasswordRecoverySentEmail.module.scss';

const PasswordRecoverySentEmail = () => {
  return (
    <>
      <Head>
        <title>Password Recovery Sent Email</title>
      </Head>
      <div className={styles.PasswordRecoverySentEmail}>
        <div className={styles['sent-mail__container']}>
          <h1 className="title">Email has been sent!</h1>
          <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
          <div className={styles['email-image']}>
            <Image src={emailIcon} alt="E-Mail" />
          </div>

          <Link href="/Login" passHref>
            <button className="primary-button login-button">Login</button>
          </Link>

          <p className={styles['resend']}>
            <span>Didn’t receive the email?</span>
            <Link href="/PasswordRecovery">Resend</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default PasswordRecoverySentEmail;
