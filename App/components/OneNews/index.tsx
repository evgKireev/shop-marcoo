import classNames from 'classnames';
import Image from 'next/image';
import styles from './OneNews.module.scss';

export enum OneNewsSize {
  Large = 'large',
  Small = 'small',
}

type OneNewsType = {
  images: string;
  title: string;
  linkText?: string;
  desc?: string;
  width: number;
  height: number;
  size: OneNewsSize;
};

const OneNews: React.FC<OneNewsType> = ({
  images,
  title,
  linkText,
  desc,
  width,
  height,
  size,
}) => {
  return (
    <div className={classNames(styles.item, { [styles.largeItem]: size })}>
      <a className={styles.itemLinkImg} href="#">
        <Image
          className={styles.largeItemLinkImg}
          width={width}
          height={height}
          src={images}
          alt="news img"
        />
      </a>
      <div className={styles.itemBox}>
        <div className={styles.itemInfo}></div>
        <h4
          className={classNames(styles.itemTitle, {
            [styles.largeitemTitle]: size,
          })}
        >
          {title}
        </h4>
        <p className={classNames(styles.text, { [styles.largeText]: size })}>
          {desc}
        </p>
        <a className={styles.itemLink} href="#">
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default OneNews;
