import ProductOne from '../ProductOne';
import { products } from '../../data/products';
import { productsType } from '../../@types';
import Link from 'next/link';

type ProductType = {
  products: productsType[];
};

const Product: React.FC<ProductType> = ({ products }) => {
  return (
    <section className="product">
      <div className="container">
        <h3 className="title">TRENDING PRODUCTS</h3>
        <p className="product__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmodmoe tempor incididunt ut labore et dolore aliqua.
        </p>
        <div className="product__items">
          {products.map((el, index) => {
            if (index < 6) {
              return (
                <ProductOne
                  id={el.id}
                  key={index}
                  images={el.images[0]}
                  check
                />
              );
            }
          })}
        </div>
        <Link className="product__link" href="products">
          LOAD MORE
        </Link>
      </div>
    </section>
  );
};

export default Product;
