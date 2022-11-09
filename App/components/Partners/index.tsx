import styles from './Partners.module.scss';
import Image from 'next/image';



const Partners = () => {
  return (
    <div className={styles.partners}>
      <div className="container">
        <ul className={styles.list}>
          <li>
            <Image
              width={95}
              height={60}
              src="/images/partners/1.png"
              alt="partners logo"
            />
          </li>
          <li>
            <Image
              width={75}
              height={60}
              src="/images/partners/2.png"
              alt="partners logo"
            />
          </li>
          <li>
            <Image
              width={54}
              height={59}
              src="/images/partners/3.png"
              alt="partners logo"
            />
          </li>
          <li>
            <Image
              width={80}
              height={60}
              src="/images/partners/4.png"
              alt="partners logo"
            />
          </li>
          <li>
            <Image
              width={60}
              height={60}
              src="/images/partners/5.png"
              alt="partners logo"
            />
          </li>
          <li>
            <Image
              width={60}
              height={60}
              src="/images/partners/6.png"
              alt="partners logo"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Partners;
