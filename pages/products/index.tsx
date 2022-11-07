import Head from 'next/head';
import LayoutContainer from '../../App/components/LayoutContainer';
import Search from '../../App/components/Search';
import Categories from '../../App/components/Categories';
import Tags from '../../App/components/Tags';
import styles from '../../styles/Shop.module.scss';
import FilterPrice from '../../App/components/FilterPrice';
import FilterColors from '../../App/components/FilterColors';
import FilterSize from '../../App/components/FilterSize';
import { products } from '../../App/data/products';
import ProductOne from '../../App/components/ProductOne';
import { TfiViewListAlt, TfiViewGrid } from 'react-icons/tfi';
import classNames from 'classnames';
import { useState } from 'react';

const Products = () => {
  const [checkBtn, setCheckBtn] = useState(true);

  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>
      <LayoutContainer title="Shop">
        <section className={styles.shop}>
          <div className="container">
            <div className={styles.inner}>
              <div className={styles.filters}>
                <Search />
                <FilterPrice />
                <FilterColors />
                <FilterSize />
                <Categories />
                <Tags />
              </div>
              <div className={styles.shopContent}>
                <div className={styles.filter}>
                  <div className={styles.filterButtons}>
                    <span>View</span>
                    <button
                      onClick={() => setCheckBtn(true)}
                      className={classNames(styles.filterBtn, {
                        [styles.active]: checkBtn,
                      })}
                    >
                      <TfiViewGrid />
                    </button>
                    <button
                      onClick={() => setCheckBtn(false)}
                      className={classNames(styles.filterBtn, {
                        [styles.active]: !checkBtn,
                      })}
                    >
                      <TfiViewListAlt />
                    </button>
                  </div>
                </div>
                <div className={classNames(styles.contentInner)}>
                  {products.map((el, index) => (
                    <ProductOne
                      key={index}
                      images={el.images}
                      check={checkBtn}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </LayoutContainer>
    </>
  );
};

export default Products;
