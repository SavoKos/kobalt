import Head from 'next/head';
import { CartProvider } from '../context/cart';
import { DBProvider } from '../context/db';
import { FilterProvider } from '../context/filter';
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
            <FilterProvider>
              <Component {...pageProps} />
            </FilterProvider>
          </CartProvider>
        </DBProvider>
      </Theme>
    </>
  );
}
