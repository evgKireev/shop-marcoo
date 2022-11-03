import classNames from 'classnames';
import Head from 'next/head';
import LayoutContainer from '../App/components/LayoutContainer';
import styles from '../styles/Contact.module.scss';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <LayoutContainer title="Contacts">
        <section className={styles.contact}>
          <div className="container">
            <div className={styles.inner}>
              <div className={styles.info}>
                <h3 className={styles.infoTitle}>
                  Feel Free Don’t Hesitate To Contact With Us
                </h3>
                <p className={styles.infoText}>
                  Lorem ipsum dolor sit amet, consectetur adingn elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo
                  maecnaacnrao cumsan lacus vel facilisis.{' '}
                </p>
                <ul className="contact__info-list">
                  <li className={styles.infoItem}>
                    <a className={styles.infoPhone} href="till:+01234567896">
                      +0-123-456-7896
                    </a>
                    <a className="contact__info-phone" href="til:+01234567896">
                      +0-123-456-7896
                    </a>
                  </li>
                  <li
                    className={classNames(styles.infoItem, styles.infoItemloc)}
                  >
                    Ranlon Market 789 Road, <br /> Market Street, Newyork
                  </li>
                  <li
                    className={classNames(styles.infoItem, styles.infoItemMail)}
                  >
                    <div>companymail@gmail.com</div>
                    <div>yourmailaddress@gmail.com</div>
                  </li>
                </ul>
              </div>
              <form className={styles.form} action="#">
                <p className={styles.formTitle}>Contact Form</p>
                <div className={styles.formInputBox}>
                  <input
                    className={styles.formInput}
                    type="text"
                    placeholder="Your Name"
                  />
                  <input
                    className={styles.formInput}
                    type="text"
                    placeholder="Your E-mail Address"
                  />
                </div>
                <input
                  className={styles.formInput}
                  type="text"
                  placeholder="Subject"
                />
                <textarea
                  className={styles.formTextarea}
                  placeholder="Message here"
                ></textarea>
                <button className={styles.formBtn} type="submit">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </section>
      </LayoutContainer>
    </>
  );
};

export default Contact;
