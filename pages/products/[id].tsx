import classNames from 'classnames';
import Head from 'next/head';
import LayoutContainer from '../../App/components/LayoutContainer';
import ProductContent from '../../App/components/ProductContent';
import ProductTabs from '../../App/components/ProductTabs';
import { products } from '../../App/data/products';
import styles from '../../styles/OneProduct.module.scss';

const OneProduct = () => {
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
                      <img src={products[0].images} alt="thumb img" />
                      <img src={products[0].images} alt="thumb img" />
                      <img src={products[0].images} alt="thumb img" />
                      <img src={products[0].images} alt="thumb img" />
                    </div>
                  </div>
                  <div className={styles.big}>
                    <div className={styles.bigItem}>
                      <img
                        className={styles.img}
                        src={products[0].images}
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
