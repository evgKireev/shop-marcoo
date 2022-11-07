import { BiSearch } from 'react-icons/bi';
import { AiOutlineShopping, AiOutlineHeart } from 'react-icons/ai';
import Image from 'next/image';
import classNames from 'classnames';

type ProductOne = {
  images: string;
  check: boolean;
};

const ProductOne: React.FC<ProductOne> = ({ images, check }) => {
  return (
    <div
      className={classNames('product-page-one', {
        ['product-page-one--list']: !check,
      })}
    >
      <div className="product-page-one__img-box">
        <Image
          width={368}
          height={370}
          src={images}
          alt="product"
          className="product-page-one__images"
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
          <h4 className="product-page-one__title">White Polo Men’s T-Shirt</h4>
          <div className="product-page-one__price">
            <div className="product-page-one__new-price">$34.00</div>
            <div className="product-page-one__old-price">$27.00</div>
          </div>
          <div className="product-page-one__content-box">
            <p className="product-page-one__text">
              Lorem ipsum dolor sit amet, adipiscing elit, sed de eusmod utlitoi
              labore et dolore magna aliqua.
            </p>
            <button className="product-page-one__btn">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductOne;
