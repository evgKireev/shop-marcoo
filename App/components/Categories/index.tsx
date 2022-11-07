import styles from './Categories.module.scss'

const category = [
  {
    text: 'Woman',
    caunter: 48,
  },
  {
    text: 'Man',
    caunter: 5,
  },
  {
    text: 'Sale Products',
    caunter: 35,
  },
  {
    text: 'Fashion',
    caunter: 5,
  },
  {
    text: 'Hot Dresses',
    caunter: 8,
  },
  {
    text: 'Accessories',
    caunter: 15,
  },
];
const Categories = () => {
  return (
    <div className={styles.item}>
      <h3 className={styles.title}>CATEGORY</h3>
      <form className="filter-category__form" action="#">
        {category.map((el, index) => (
          <label key={index} className={styles.label}>
            <input className={styles.input} type="checkbox" />
            <div className={styles.checkbox}>
              <span className="filter-category__text">{el.text}</span>
              <span>{el.caunter}</span>
            </div>
          </label>
        ))}
      </form>
    </div>
  );
};

export default Categories;
