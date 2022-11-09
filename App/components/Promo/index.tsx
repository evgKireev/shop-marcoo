import Image from 'next/image';
import Link from 'next/link';
import styles from './Promo.module.scss'

const Promo = () => {
  return (
    <section className={styles.topSlider}>
      <div className={styles.container}>
        <div >
          <div className={styles.item}>
            <div className={styles.content}>
              <h3 className={styles.title}>
                New Season
                <br /> New Brand Collection
              </h3>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                et dolore magna aliqua. Ipsum.
              </p>
              <Link className={styles.link} href="products">
                BUY NOW
              </Link>
            </div>
            <Image
              width={655}
              height={630}
              className="top-slider__img"
              src="/images/slider/1.png"
              alt="slider images"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
