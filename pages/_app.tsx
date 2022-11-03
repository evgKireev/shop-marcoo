import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../App/Layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <main className="main">
        <Component {...pageProps} />;
      </main>
    </Layout>
  );
};

export default App;
