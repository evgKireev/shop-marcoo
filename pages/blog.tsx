import LayoutContainer from '../App/components/LayoutContainer';
import OneNews from '../App/components/OneNews';
import Search from '../App/components/Search';
import Autor from '../App/components/Autor';
import styles from '../styles/Blog.module.scss';
import Categories from '../App/components/Categories';
import Tags from '../App/components/Tags';
import { OneNewsSize } from '../App/components/OneNews';
import Head from 'next/head';

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

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <LayoutContainer title="Blog">
        <section className={styles.blog}>
          <div className="container">
            <div className={styles.inner}>
              <div className={styles.content}>
                {news.map((el, index) => (
                  <OneNews
                    key={index}
                    title={el.title}
                    images={el.images}
                    width={770}
                    height={450}
                    desc={el.desc}
                    size={OneNewsSize.Large}
                  />
                ))}
              </div>
              <div className={styles.aside}>
                <Search />
                <Autor />
                <Categories />
                <Tags />
              </div>
            </div>
          </div>
        </section>
      </LayoutContainer>
    </>
  );
};

export default Blog;
