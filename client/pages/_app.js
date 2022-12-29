import Head from 'next/head';
import { CartProvider } from '../context/cart';
import { DBProvider } from '../context/db';
import '../styles/globals.css';
import Theme from '../Theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kobalt | Online Restoran</title>
      </Head>
      <Theme>
        <DBProvider>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </DBProvider>
      </Theme>
    </>
  );
}
