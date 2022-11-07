import FilterProductColor from '../ProductFilterColor';
import ProductFilterSize from '../ProductFilterSize';
import ProductInfo from '../ProductInfo';
import ProductTabs from '../ProductTabs';
import styles from './ProductContent.module.scss';

const ProductContent = () => {
  return (
    <div className={styles.content}>
      <h3 className={styles.title}>Emboossed Packet Backpack</h3>
      <div className={styles.box}>
        <div className={styles.price}>
          <div className={styles.priceNew}>$19.00</div>
          <div className={styles.priceOld}>(29.00)</div>
        </div>
      </div>
      <p className={styles.text}>
        <span>Review:</span> Lorem ipsum dolor sit amet, consectetur adipscg
        elit, sed do eiusmod tempor incididunt ut laborea et dolore magna alqua.
        Quis ipsum suspendssem moa ultrices gravida.
      </p>
      <FilterProductColor />
      <ProductFilterSize />
      <ProductInfo />
      <div className={styles.containerBtn}>
        <button className={styles.itemBTN} type="submit">
          -
        </button>
        <span>1</span>
        <button className={styles.itemBTN} type="submit">
          +
        </button>
        <button className={styles.itemBtn} type="submit">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductContent;
