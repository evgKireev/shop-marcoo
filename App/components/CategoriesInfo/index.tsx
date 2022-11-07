import Image from 'next/image';
import styles from './CategoriesInfo.module.scss';

const infoCard = [
  {
    title: 'Free Shipping Order $100',
    desc: 'Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do',
    image: '/images/Icon1.svg',
  },
  {
    title: '  30 Days Easy Return',
    desc: 'Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do',
    image: '/images/Icon2.svg',
  },
  {
    title: ' 24/7 Customer Support',
    desc: 'Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do',
    image: '/images/Icon3.svg',
  },
];

const categories = [
  {
    subTitle: ' Up To 40% Off',
    title: ' Shoes & Jewellry',
    link: ' EXPLORE MORE',
    image: '/images/content/categories/foto1.jpg',
  },
  {
    subTitle: 'New Arrival',
    title: 'Clothes & Accessories',
    link: ' EXPLORE MORE',
    image: '/images/content/categories/foto1.jpg',
  },
  {
    subTitle: 'Trending Now',
    title: 'Men’s Fashio',
    link: 'Trending Now',
    image: '/images/content/categories/foto1.jpg',
  },
  {
    subTitle: 'Hot Collection',
    title: 'Girl’s Fashion',
    link: 'EXPLORE MORE',
    image: '/images/content/categories/foto1.jpg',
  },
];

const CategoriesInfo = () => {
  return (
    <section className={styles.categoriesInfo}>
      <div className={styles.inner}>
        <div className="container">
          <div className={styles.info}>
            {infoCard.map((el, index) => (
              <div key={index} className={styles.itemInfo}>
                <Image width={60} height={60} src={el.image} alt="icon1" />
                <h4 className={styles.title}>{el.title}</h4>
                <p className={styles.text}>{el.desc}</p>
              </div>
            ))}
          </div>
          <div className="categories">
            <h2 className="title">TOP CATEGORIES</h2>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmo tempor ut labore et dolore aliqua.
            </p>
            <div className={styles.items}>
              {categories.map((el, index) => (
                <div key={index} className={styles.item}>
                  <div className={styles.subtitle}>{el.subTitle}</div>
                  <h4 className={styles.title}>{el.title}</h4>
                  <a className={styles.link} href="#">
                    {el.link}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesInfo;
