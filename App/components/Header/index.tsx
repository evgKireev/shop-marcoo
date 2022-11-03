import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';

const menuList = [
  { title: 'HOME', url: '/' },
  { title: 'SHOP', url: 'shop' },
  { title: 'PAGE', url: 'page' },
  { title: 'BLOG', url: 'blog' },
  { title: 'CONTACT', url: 'contact' },
];

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.inner}>
          <Link className="logo" href="/">
            <Image width={183} height={30} src="/images/logo.png" alt="logo" />
          </Link>
          <nav>
            <button className={styles.btn}>
              <span></span>
            </button>
            <ul className={styles.list}>
              {menuList.map((el, index) => (
                <li key={index} className={classNames(styles.menuListItem)}>
                  <Link className={styles.listLink} href={el.url}>
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.userNav}>
            <a className={styles.userNavLink} href="#">
              <Image
                width={25}
                height={25}
                src="/images/icons/user.png"
                alt="user icon"
                className="user-nav__link-img"
              />
            </a>
            <a className={styles.userNavLink} href="#">
              <Image
                width={25}
                height={25}
                src="/images/icons/search.png"
                alt="search icon"
                className="user-nav__link-img"
              />
            </a>
            <a className={styles.userNavLink} href="#">
              <Image
                width={25}
                height={25}
                src="/images/icons/heart_icon.png"
                alt="heart icon"
                className="user-nav__link-img"
              />
              <span className={styles.num}>3</span>
            </a>
            <a className={styles.userNavLink} href="#">
              <Image
                width={25}
                height={25}
                src="/images/icons/cart_icon.png"
                alt="cart icon"
                className="user-nav__link-img"
              />
              <span className={styles.num}>7</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
