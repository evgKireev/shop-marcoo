import Head from 'next/head';
import Autor from '../../App/components/Autor';
import Categories from '../../App/components/Categories';
import LayoutContainer from '../../App/components/LayoutContainer';
import OneNews, {
  OneNewsLong,
  OneNewsSize,
} from '../../App/components/OneNews';
import Search from '../../App/components/Search';
import Tags from '../../App/components/Tags';
import { useRouter } from 'next/router';
import styles from '../../styles/OneBlog.module.scss';
const news = [
  {
    id: 1,
    images: '/images/news/1news.jpg',
    title: 'Our Apps User Use Mobile On His Mobile',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodoami viverra maycenas acchmsan lacus vel facilisis.',
    blockquote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elt, sed does eiusmod tempor incididunt ut labore et dolore magna aliqua dilo. Quis ipsum suspendisse ultrices gravida.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt of in utmm labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo ecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. Risus comdoumar viverra more maecenas accumsan lacus vel facilisis.',
  },
  {
    id: 2,
    images: '/images/news/2news.jpg',
    title: 'Our Apps User Use Mobile On His Mobile',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodoami viverra maycenas acchmsan lacus vel facilisis.',
    blockquote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elt, sed does eiusmod tempor incididunt ut labore et dolore magna aliqua dilo. Quis ipsum suspendisse ultrices gravida.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt of in utmm labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo ecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. Risus comdoumar viverra more maecenas accumsan lacus vel facilisis.',
  },
  {
    id: 3,
    images: '/images/news/3news.jpg',
    title: 'Our Apps User Use Mobile On His Mobile',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodoami viverra maycenas acchmsan lacus vel facilisis.',
    blockquote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elt, sed does eiusmod tempor incididunt ut labore et dolore magna aliqua dilo. Quis ipsum suspendisse ultrices gravida.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt of in utmm labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo ecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. Risus comdoumar viverra more maecenas accumsan lacus vel facilisis.',
  },
];

const OneBlog = () => {
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
                <OneNews
                  id={news[0].id}
                  title={news[0].title}
                  images={news[0].images}
                  width={770}
                  height={450}
                  desc={news[0].desc}
                  size={OneNewsSize.Large}
                  text={news[0].text}
                  blockquote={news[0].blockquote}
                  long={OneNewsLong.Large}
                />
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

export default OneBlog;
