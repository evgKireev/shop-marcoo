import { BiSearch } from 'react-icons/bi';
import { AiOutlineShopping, AiOutlineHeart } from 'react-icons/ai';
import Image from 'next/image';

const product = [
  {
    images: '/images/product/1.png',
    newPrice: '$34.00',
    oldPrice: '$27.00',
    desc: 'Lorem ipsum dolor sit amet, adipiscing elit, sed de eusmod utlitoi labore et dolore magna aliqua.',
    like: 0,
    title: 'White Polo Men’s T-Shirt',
  },
  {
    images: '/images/product/2.png',
    newPrice: '$34.00',
    oldPrice: '$27.00',
    desc: 'Lorem ipsum dolor sit amet, adipiscing elit, sed de eusmod utlitoi labore et dolore magna aliqua.',
    like: 0,
    title: 'White Polo Men’s T-Shirt',
  },
  {
    images: '/images/product/3.png',
    newPrice: '$34.00',
    oldPrice: '$27.00',
    desc: 'Lorem ipsum dolor sit amet, adipiscing elit, sed de eusmod utlitoi labore et dolore magna aliqua.',
    like: 0,
    title: 'White Polo Men’s T-Shirt',
  },
  {
    images: '/images/product/4.png',
    newPrice: '$34.00',
    oldPrice: '$27.00',
    desc: 'Lorem ipsum dolor sit amet, adipiscing elit, sed de eusmod utlitoi labore et dolore magna aliqua.',
    like: 0,
    title: 'White Polo Men’s T-Shirt',
  },
  {
    images: '/images/product/5.png',
    newPrice: '$34.00',
    oldPrice: '$27.00',
    desc: 'Lorem ipsum dolor sit amet, adipiscing elit, sed de eusmod utlitoi labore et dolore magna aliqua.',
    like: 0,
    title: 'White Polo Men’s T-Shirt',
  },
  {
    images: '/images/product/6.png',
    newPrice: '$34.00',
    oldPrice: '$27.00',
    desc: 'Lorem ipsum dolor sit amet, adipiscing elit, sed de eusmod utlitoi labore et dolore magna aliqua.',
    like: 0,
    title: 'White Polo Men’s T-Shirt',
  },
];

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
          {product.map((el, index) => (
            <div key={index} className="product-page-one">
              <div className="product-page-one__img-box">
                <Image
                  width={368}
                  height={370}
                  className={''}
                  src={el.images}
                  alt="product"
                />
                <div className="product-page-one__link-box">
                  <a className="product-page-one__link" href="#">
                    <BiSearch />
                  </a>
                  <a
                    className="product-page-one__link product-page-one__link--line"
                    href="#"
                  >
                    <AiOutlineShopping />
                  </a>
                  <a className="product-page-one__link" href="#">
                    <AiOutlineHeart />
                  </a>
                </div>
              </div>
              <div className="product-page-one__wrapper-box">
                <div className="product-page-one__box">
                  <div className="star" data-rateyo-rating="3"></div>
                  <h4 className="product-page-one__title">
                    White Polo Men’s T-Shirt
                  </h4>
                  <div className="product-page-one__price">
                    <div className="product-page-one__new-price">$34.00</div>
                    <div className="product-page-one__old-price">$27.00</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a className="product__link" href="# ">
          LOAD MORE
        </a>
      </div>
    </section>
  );
};

export default Product;
