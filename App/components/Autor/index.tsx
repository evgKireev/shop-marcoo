import Image from 'next/image';
import { AiOutlineTwitter, AiOutlineGoogle } from 'react-icons/ai';
import { FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import styles from './Autor.module.scss';

const Autor = () => {
  return (
    <div className={styles.item}>
      <Image
        width={160}
        height={160}
        className={styles.avatar}
        src="/images/avatar/ceo.jpg"
        alt="avatar ceo"
      />
      <div className={styles.name}>Tom D. Maianay</div>
      <div className={styles.position}>CEO & Founder</div>
      <div className={styles.text}>
        Lorem ipsum dolor sit amet, consectetum adipiscing eit, sed do eiusmod
        temporary incididunt ut labore et dolore magnaamo aliqua. Qus ipsum
        suspendisse ultrices an gravida. Risus commodo
      </div>
      <div >
        <ul className={styles.social}>
          <li>
            <a href="#">
              <AiOutlineTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="#">
              <AiOutlineGoogle />
            </a>
          </li>
          <li>
            <a href="#">
              <FaPinterestP />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Autor;
