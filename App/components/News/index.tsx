import Image from 'next/image';

import styles from './News.module.scss';

const news = [
  {
    images: '/images/news/1news.jpg',
    title: 'Our Apps User Use Mobile On His Mobile',
  },
  {
    images: '/images/news/2news.jpg',
    title: 'Our Apps User Use Mobile On His Mobile',
  },
  {
    images: '/images/news/3news.jpg',
    title: 'Our Apps User Use Mobile On His Mobile',
  },
];

const News = () => {
  return (
    <section className={styles.news}>
      <div className="container">
        <h3 className='title'>From Our Blog</h3>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmodmoe tempor incididunt ut labore et dolore aliqua.
        </p>
        <div className={styles.items}>
          {news.map((el, index) => (
            <div key={index} className={styles.item}>
              <a className={styles.itemLinkImg} href="#">
                <Image
                  width={370}
                  height={288}
                  src={el.images}
                  alt="news img"
                />
              </a>
              <div className={styles.itemBox}>
                <div className={styles.itemInfo}></div>
                <h4 className={styles.itemTitle}>{el.title}</h4>
                <a className={styles.itemLink} href="#">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
