import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaPinterestP } from 'react-icons/fa';
import styles from './ProductInfo.module.scss';

const ProductInfo = () => {
  return (
    <div className="product-filter__info product-info">
      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.title}>SKU</div>
          <div className={styles.link}>11FSE7739</div>
        </li>
        <li className={styles.item}>
          <div className={styles.title}>Categories</div>
          <div className="product-info__text">Woman</div>
        </li>
        <li className={styles.item}>
          <div className={styles.title}>Tags</div>
          <div className="product-info__text">
            <a href="#">Fashion</a> | <a href="#">Woman</a> |
            <a href="#">Sale</a>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.title}> Share</div>
          <div className="product-info__text">
            <a className={styles.link} href="#">
              <FaFacebookF />
            </a>
            <a className={styles.link} href="#">
              <AiOutlineTwitter />
            </a>
            <a className={styles.link} href="#">
              <FaPinterestP />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductInfo;
