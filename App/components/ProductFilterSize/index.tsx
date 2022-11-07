import styles from './ProductFilterSize.module.scss';

const size = ['S', 'L', 'M', 'XS', 'XL', 'XXL'];
const ProductFilterSize = () => {
  return (
    <div className={styles.size}>
      <div className={styles.sizeTitle}>Size: </div>
      {size.map((el, index) => (
        <label key={index} className={styles.sizeLabel}>
          <input className={styles.sizeInput} type="radio" name="size" />
          <span className={styles.sizeRadio}>{el}</span>
        </label>
      ))}
    </div>
  );
};

export default ProductFilterSize;
