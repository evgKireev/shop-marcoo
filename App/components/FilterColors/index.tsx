import classNames from 'classnames';
import styles from './FilterColors.module.scss';
const colors = [
  { title: 'Blue', caunter: 15 },
  { title: 'Red', caunter: 9 },
  { title: 'Green', caunter: 28 },
  { title: 'Orange', caunter: 11 },
  { title: 'Black', caunter: 15 },
  { title: 'Purple', caunter: 21 },
];

const FilterColors = () => {
  return (
    <div className={styles.item}>
      <h3 className={styles.title}>Color Filter</h3>
      {colors.map((el, index) => (
        <form key={index} className={styles.form} action="#">
          <label className={styles.label}>
            <span>
              {el.title} ({el.caunter})
            </span>
            <div>
              <input className={styles.input} type="checkbox" />
              <span
                className={classNames(styles.checkbox, {
                  [styles.blue]: el.title === 'Blue',
                  [styles.red]: el.title === 'Red',
                  [styles.green]: el.title === 'Green',
                  [styles.orange]: el.title === 'Orange',
                  [styles.black]: el.title === 'Black',
                  [styles.purple]: el.title === 'Purple',
                })}
              ></span>
            </div>
          </label>
        </form>
      ))}
    </div>
  );
};

export default FilterColors;
