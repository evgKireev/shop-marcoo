import Image from 'next/image';
import styles from './Search.module.scss'

const Search = () => {
  return (
    <div className={styles.item}>
      <h3 className={styles.title}>Search</h3>
      <form className={styles.form} action="#">
        <input
          className={styles.input}
          type="text"
          placeholder="Search your keyword...."
        />
        <button className={styles.btn} type="submit">
          <Image
            width={15}
            height={15}
            src="/images/icons/search_icon.svg"
            alt="search imeges"
          />
        </button>
      </form>
    </div>
  );
};

export default Search;
