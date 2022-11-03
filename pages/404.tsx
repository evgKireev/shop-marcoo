import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Error.module.scss';

const Error = () => {
  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <section className={styles.page}>
        <div className="container">
          <div className={styles.inner}>
            <div className={styles.content}>
              <h2 className={styles.title}>OPPS! Page Not Found!!</h2>
              <p className={styles.text}>
                We,re sorry but we can’t seem to find the pages you request.
                This might be because you have typed the web address not find
                incorrectly.
              </p>
              <a className={styles.link} href="">
                BACK TO HOME
              </a>
            </div>
            <Image width={600} height={550} src="/images/404.png" alt="404" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
