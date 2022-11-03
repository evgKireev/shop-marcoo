import styles from './Tags.module.scss';
const tags = [
  'Sweetshirt',
  'Man Accessories',
  'Fashion',
  'Polo',
  'T-Shirt',
  'Jewellery',
];

const Tags = () => {
  return (
    <div className={styles.item}>
      <h3 className={styles.title}>Popular Tags</h3>
      <form className={styles.form} action="#">
        {tags.map((el, index) => (
          <label key={index} className={styles.label}>
            <input className={styles.input} type="checkbox" />
            <div className={styles.checkbox}>{el}</div>
          </label>
        ))}
      </form>
    </div>
  );
};

export default Tags;
