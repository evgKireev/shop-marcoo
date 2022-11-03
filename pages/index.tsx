import Head from 'next/head';
import Promo from '../App/components/Promo';
import CategoriesInfo from '../App/components/CategoriesInfo';
import VideoBlock from '../App/components/VideoBlock';
import News from '../App/components/News';
import Partners from '../App/components/Partners';
import Promoushens from '../App/components/Promoushens';
import styles from '../styles/Home.module.scss';
import Product from '../App/components/Product';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shop Marcoo</title>
        <meta name="description" content="Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Promo />
      <CategoriesInfo />
      <VideoBlock />
      <Product />
      <Promoushens />
      <Partners />
      <News />
    </div>
  );
}
