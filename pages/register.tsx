import classNames from 'classnames';
import Head from 'next/head';
import Link from 'next/link';
import LayoutContainer from '../App/components/LayoutContainer';
import styles from '../styles/Register.module.scss';

const Register = () => {
  return (
    <>
      <Head>
        <title>REGISTER</title>
      </Head>
      <LayoutContainer title="Register">
        <section className={styles.modal}>
          <div className="container">
            <div className={styles.links}>
              <Link
                className={classNames(styles.link, styles.linkActive)}
                href="register"
              >
                REGISTER
              </Link>
              <Link className={styles.link} href="login">
                LOGIN
              </Link>
            </div>
            <form className="modal__form" action="#">
              <label className={styles.label}>
                Username or email address*
                <input className={styles.input} type="text" required />
              </label>
              <label className={styles.label}>
                Password*
                <input className={styles.input} type="password" required />
              </label>
              <p className={styles.text}>
                A password will be sent to your email address.
              </p>
              <p className={styles.text}>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </p>
              <label className={styles.label}>
                <input type="checkbox" />
                Agree with Terms & Conditions
              </label>

              <button className={styles.btn} type="submit">
                REGISTER
              </button>
            </form>
          </div>
        </section>
      </LayoutContainer>
    </>
  );
};

export default Register;
