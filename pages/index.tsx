import Head from 'next/head';
import Promo from '../App/components/Promo';
import CategoriesInfo from '../App/components/CategoriesInfo';
import styles from '../styles/Home.module.scss';

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
    </div>
  );
}
