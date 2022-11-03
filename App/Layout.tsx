import Header from './components/Header';
import Footer from './components/Footer';
import { ReactElement } from 'react';

type LayoutType = {
  children: ReactElement;
};

const Layout: React.FC<LayoutType> = ({ children }) => {
  return (
    <>
      <Header />

      {children}
      <Footer />
    </>
  );
};
export default Layout;
