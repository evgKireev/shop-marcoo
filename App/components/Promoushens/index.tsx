import styles from './Promoushens.module.scss';

const Promoushens = () => {
  return (
    <div className={styles.promo}>
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.subtitle}>Style Fashion</p>'
          <h3 className="title">DEAL OF THE DAY</h3>
          <div className={styles.clock} data-time="'2022-02-20'">
            <div className={styles.clockItem}>
              <span className={styles.days}></span>
              <div className={styles.text}>Days</div>
            </div>
            <div className={styles.clockItem}>
              <span></span>
              <div>Hours</div>
            </div>
            <div className={styles.clockItem}>
              <span></span>
              <div>Minutes</div>
            </div>
            <div className={styles.clockItem}>
              <span></span>
              <div>Seconds</div>
            </div>
          </div>
          <a className={styles.link} href="#">
            SHOP NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default Promoushens;
