import classNames from 'classnames';
import CommentForm from '../CommentForm';
import Comments from '../Comments';
import styles from './ProductTabs.module.scss';

const ProductTabs = () => {
  return (
    <div className={styles.productTabs}>
      <div className={styles.top}>
        <a className={styles.topItem} href=" #tab-1">
          Description
        </a>
        <a className={styles.topItem} href="#tab-2">
          Additional information
        </a>
        <a
          className={classNames(styles.topItem, styles.activeTitle)}
          href=" #tab-3 "
        >
          Reviews
        </a>
      </div>
      <div className="product-tabs__content">
        <div className={styles.contentItem} id="tab-1">
          content 1
        </div>
        <div className={styles.contentItem} id="tab-2">
          content 2
        </div>
        <div
          className="product-tabs__content-item product-tabs__content-item--active"
          id="tab-3"
        >
          <Comments />
          <CommentForm title="Add your review" text="Leave Review" />
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
