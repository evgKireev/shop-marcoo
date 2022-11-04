import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import CommentForm from '../CommentForm';
import Comments from '../Comments';
import styles from './OneNews.module.scss';

export enum OneNewsSize {
  Large = 'large',
  Small = 'small',
}

export enum OneNewsLong {
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
  size?: OneNewsSize;
  id: number;
  blockquote?: string;
  text?: string;
  long: OneNewsLong;
};

const OneNews: React.FC<OneNewsType> = ({
  images,
  title,
  linkText,
  desc,
  width,
  height,
  size,
  id,
  blockquote,
  text,
  long,
}) => {
  const bigNews = long === OneNewsLong.Large
  return (
    <>
      <div className={classNames(styles.item, { [styles.largeItem]: size })}>
        <Link className={styles.itemLinkImg} href={`blog/${id}`}>
          <Image
            className={styles.largeItemLinkImg}
            width={width}
            height={height}
            src={images}
            alt="news img"
          />
        </Link>
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
          {bigNews ? (
            <div>
              <blockquote className={styles.blockquote}>
                {blockquote}
              </blockquote>
              <p className={styles.largeText}>{text}</p>
              <Image
                width={339}
                height={274}
                className={styles.leftImg}
                src="/images/blog/blog-one.jpg"
                alt=""
              />
              <p className={styles.largeText}>{text}</p>
              <a className={styles.itemLink} href="#">
                {linkText}
              </a>
            </div>
          ) : null}
        </div>
      </div>
      {bigNews ? (
        <>
          <div className={styles.author}>
            <Image
              width={140}
              height={140}
              className={styles.authorImg}
              src="/images/blog/author.jpg"
              alt="author"
            />
            <div>
              <h5 className={styles.authorTitle}>JHON DOE</h5>
              <p>{text}</p>
            </div>
          </div>
          <Comments />
          <CommentForm />
        </>
      ) : null}
    </>
  );
};

export default OneNews;
