import Image from 'next/image';
import styles from './VideoBlock.module.scss';

const VideoBlock = () => {
  return (
    <section className={styles.videoFashion}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.popup}>
            <Image
              width={100}
              height={100}
              src="/images/icons/play.svg"
              alt="video play butoon"
            />
          </div>
          <div className={styles.content}>
            <p className={styles.subtitle}>Winter Collection 20% Off</p>
            <h3 className={styles.title}>TRENDING FASHION</h3>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur apiscing elit, sed do
              eiusmod temp incididunt ut labore et dolore magna aliqua
              consectetur adipiscing elit, sedu do eiusmod temp indidunt ut
              labore et dolore magna aliqua.. Quis ipsum de ultcesm. Risus
              commodo viverra maecenas.
            </p>
            <a className={styles.link} href="#">
              View Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoBlock;