import classNames from 'classnames';
import Head from 'next/head';
import Link from 'next/link';
import LayoutContainer from '../App/components/LayoutContainer';
import styles from '../styles/Register.module.scss';

const Login = () => {
  return (
    <>
      <Head>
        <title>LOG IN</title>
      </Head>
      <LayoutContainer title="Log In">
        <section className={styles.modal}>
          <div className="container">
            <div className={styles.links}>
              <Link className={styles.link} href="register">
                REGISTER
              </Link>
              <Link
                className={classNames(styles.link, styles.linkActive)}
                href="login"
              >
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

              <label className={styles.label}>
                <input type="checkbox" />
                Remember me
              </label>
              <button className={styles.btn} type="submit">
                REGISTER
              </button>
              <p className={styles.error}>Lost your password?</p>
            </form>
          </div>
        </section>
      </LayoutContainer>
    </>
  );
};

export default Login;
