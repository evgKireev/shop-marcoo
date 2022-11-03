import Head from 'next/head';
import { ReactElement } from 'react';
import styles from './LayoutContainer.module.scss';

type LayoutContainerType = {
  children: ReactElement;
  title: string;
};

const LayoutContainer: React.FC<LayoutContainerType> = ({
  children,
  title,
}) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <section className="top">
        <div className={styles.container}>
          <div className="container">
            <h2 className="top__title title">{title}</h2>
            <div className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link" href="">
                    Home
                  </a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link" href="">
                    {title}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {children}
    </>
  );
};

export default LayoutContainer;
