import ProductOne from '../ProductOne';
import { products } from '../../data/products';

const Product = () => {
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
              return <ProductOne key={index} images={el.images} />;
            }
          })}
        </div>
        <a className="product__link" href="# ">
          LOAD MORE
        </a>
      </div>
    </section>
  );
};

export default Product;
