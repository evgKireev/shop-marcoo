import styles from './FilterSize.module.scss';
const size = ['X-small', 'Small', 'Medium', 'Large', 'XXL'];
const FilterSize = () => {
  return (
    <div className={styles.item}>
      <h3 className={styles.title}>Size Filter</h3>
      <form className="filter-size__form" action="#">
        {size.map((el, index) => (
          <label key={index} className={styles.label}>
            <input className={styles.input} type="checkbox" />
            <span className={styles.checkbox}></span>
            <span className={styles.text}>{el}</span>
          </label>
        ))}
      </form>
    </div>
  );
};

export default FilterSize;
