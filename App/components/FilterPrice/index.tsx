import styles from './FilterPrice.module.scss'

const FilterPrice = () => {
  return (
    <div className={styles.item}>
      <h3 className={styles.title}>Price Filter</h3>
      <form className="filter-price__form" action="">
        <input
          className="filter-price__input"
          type="text"
          data-min="0"
          data-max="999"
          data-from="200"
          data-to="800"
        />
        <label className={styles.label}>
          <span>
            Price $<span className="filter-price__from"></span>- $
            <span className="filter-price__to"></span>
          </span>
          <button className={styles.btn} type="submit">
            Filter
          </button>
        </label>
      </form>
    </div>
  );
};

export default FilterPrice;
