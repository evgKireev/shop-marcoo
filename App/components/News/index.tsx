import Image from 'next/image';
import OneNews from '../OneNews';
import styles from './News.module.scss';

const news = [
  {
    images: '/images/news/1news.jpg',
    title: 'Our Apps User Use Mobile On His Mobile',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodoami viverra maycenas acchmsan lacus vel facilisis.',
  },
  {
    images: '/images/news/2news.jpg',
    title: 'Our Apps User Use Mobile On His Mobile',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodoami viverra maycenas acchmsan lacus vel facilisis.',
  },
  {
    images: '/images/news/3news.jpg',
    title: 'Our Apps User Use Mobile On His Mobile',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodoami viverra maycenas acchmsan lacus vel facilisis.',
  },
];

const News = () => {
  return (
    <section className={styles.news}>
      <div className="container">
        <h3 className="title">From Our Blog</h3>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmodmoe tempor incididunt ut labore et dolore aliqua.
        </p>
        <div className={styles.items}>
          {news.map((el, index) => (
            <OneNews
              key={index}
              title={el.title}
              images={el.images}
              linkText="Read More->"
              width={370}
              height={288}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
