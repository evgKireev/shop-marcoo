import Image from 'next/image';
import styles from './Footer.module.scss';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiOutlineGoogle } from 'react-icons/ai';
import { FaLinkedinIn, FaPinterestP } from 'react-icons/fa';

const icons = [
  <FaFacebookF />,
  <AiOutlineTwitter />,
  <FaLinkedinIn />,
  <AiOutlineGoogle />,
  <FaPinterestP />,
];

const usefulLinks: string[] = [
  'About Us',
  'Privacy Policy',
  'Terms & Conditions',
  'Contact Us',
  'Help & Support',
];

const myAccount = [
  'My Account',
  'My Cart',
  'My WIshlist',
  'Registration',
  'Check Out',
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container ">
        <div className={styles.footerTop}>
          <div className={styles.contact}>
            <a className={styles.logo} href="# ">
              <Image
                width={183}
                height={30}
                src="/images/logo.png "
                alt="logo "
              />
            </a>
            <a className={styles.adress} href="# ">
              No. 342 - London Oxford Street, 012 United States
            </a>
            <a className={styles.email} href="mailto::Youremail@gmail.com ">
              Youremail@gmail.com
            </a>
            <a className={styles.phone} href="tel::+02838388393 ">
              +0283 838 8393
            </a>

            <ul className={styles.socialList}>
              {icons.map((el, index) => (
                <li key={index} className={styles.socialList}>
                  <a className={styles.socialLink} href="# ">
                    {el}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.nav}>
            <h6 className={styles.title}>Useful Links</h6>
            <ul className="footer-top__list ">
              {usefulLinks.map((el, index) => (
                <li key={index} className="footer-top__item ">
                  <a className={styles.link} href="# ">
                    {el}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.nav}>
            <h6 className={styles.title}>My Account</h6>
            <ul className="footer-top__list ">
              {myAccount.map((el, index) => (
                <li key={index} className="footer-top__item ">
                  <a className={styles.link} href="# ">
                    {el}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.itemForm}>
            <h6 className={styles.title}>Subscribe Our Newsletter</h6>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br /> Quis ipsum suspendisse ultrices gravida.
            </p>
            <form className={styles.itemForm} action="# ">
              <input
                className={styles.formInput}
                type=" email "
                placeholder="Your email address "
              />
              <button className={styles.formBtn}>Subscribe</button>
            </form>
          </div>
        </div>
        <div className={styles.footerButtom}>
          <p className="footer-buttom__copy ">
            © 2022 EvgeniyKireev. All Rights Reserved.
          </p>
          <div className={styles.acceptImg}>
            We Accept
            <Image
              width={33}
              height={20}
              src="/images/icons/mastercart.png "
              alt="accept master "
            />
            <Image
              width={28}
              height={20}
              src="/images/icons/vasacart.png "
              alt="accept visa "
            />
            <Image
              width={75}
              height={20}
              src="/images/icons/paypal.png "
              alt="accept paypal "
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
