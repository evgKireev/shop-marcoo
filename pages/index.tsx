import Head from 'next/head';
import Promo from '../App/components/Promo';
import CategoriesInfo from '../App/components/CategoriesInfo';
import VideoBlock from '../App/components/VideoBlock';
import News from '../App/components/News';
import Partners from '../App/components/Partners';
import Promoushens from '../App/components/Promoushens';
import Product from '../App/components/Product';
import { productsType } from '../App/@types';

type ProductType = {
  products: productsType[];
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://636ba8d7ad62451f9fb81c41.mockapi.io/marcoo/`
  );
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { products: data },
  };
};

const Home: React.FC<ProductType> = ({ products }) => {
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
      <Product products={products} />
      <Promoushens />
      <Partners />
      <News />
    </div>
  );
};

export default Home;
