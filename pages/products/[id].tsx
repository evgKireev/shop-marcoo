import classNames from 'classnames';
import Head from 'next/head';
import LayoutContainer from '../../App/components/LayoutContainer';
import ProductContent from '../../App/components/ProductContent';
import ProductTabs from '../../App/components/ProductTabs';
import styles from '../../styles/OneProduct.module.scss';
import { productsType } from '../../App/@types';

type ProductType = {
  product: productsType;
};

export async function getStaticPaths() {
  const res = await fetch(`https://636ba8d7ad62451f9fb81c41.mockapi.io/marcoo`);
  const data = await res.json();

  const paths = data.map((el: any) => ({ params: { id: el.id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async (context: { params: { id: number } }) => {
  const { id } = context.params;
  const res = await fetch(
    `https://636ba8d7ad62451f9fb81c41.mockapi.io/marcoo/${id}`
  );
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { product: data },
  };
};

const OneProduct: React.FC<ProductType> = ({ product }) => {
  return (
    <>
      <Head>
        <title>Product</title>
      </Head>
      <LayoutContainer title="Product">
        <section className={styles.productPage}>
          <div className="container">
            <div>
              <div className={styles.inner}>
                <div className={classNames(styles.slide, styles.productSlide)}>
                  <div className={styles.thumb}>
                    <div className={styles.thumbItem}>
                      {product.images.map((el) => (
                        <img src={el} alt="thumb img" />
                      ))}
                    </div>
                  </div>
                  <div className={styles.big}>
                    <div className={styles.bigItem}>
                      <img
                        src={product.images[0]}
                        className={styles.img}
                        alt="big img"
                      />
                    </div>
                  </div>
                </div>
                <ProductContent />
              </div>
              <ProductTabs />
            </div>
          </div>
        </section>
      </LayoutContainer>
    </>
  );
};

export default OneProduct;
