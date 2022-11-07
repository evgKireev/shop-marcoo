import styles from './FilterProductColor.module.scss';

const FilterProductColor = () => {
  return (
    <>
      <form className="product-item__form product-filter" action="#">
        <div className={styles.color}>
          <div className={styles.colorTitle}>Color:</div>
          <label className={styles.colorLabel}>
            <input className={styles.colorInput} type="radio" name="color" />
            <span className={styles.colorRadio}>
              <span className={styles.ro}></span>
            </span>
          </label>
          <label className={styles.colorLabel}>
            <input
              className={styles.colorInput}
              type="radio"
              name="color"
            />
            <span className={styles.colorRadio}>
              <span className={styles.s}></span>
            </span>
          </label>
          <label className={styles.colorLabel}>
            <input className={styles.colorInput} type="radio" name="color" />
            <span className={styles.colorRadio}>
              <span className={styles.y}></span>
            </span>
          </label>
          <label className={styles.colorLabel}>
            <input className={styles.colorInput} type="radio" name="color" />
            <span className={styles.colorRadio}>
              <span className={styles.p}></span>
            </span>
          </label>
          <label className={styles.colorLabel}>
            <input className={styles.colorInput} type="radio" name="color" />
            <span className={styles.colorRadio}>
              <span className={styles.g}></span>
            </span>
          </label>
          <label className={styles.colorLabel}>
            <input className={styles.colorInput} type="radio" name="color" />
            <span className={styles.colorRadio}>
              <span className={styles.re}></span>
            </span>
          </label>
        </div>
      </form>
    </>
  );
};

export default FilterProductColor;
