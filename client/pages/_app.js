import Head from 'next/head';
import { CartProvider } from '../context/cart';
import { DBProvider } from '../context/db';
import { FilterProvider } from '../context/filter';
import { UserProvider } from '../context/user';
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
              <UserProvider>
                <Component {...pageProps} />
              </UserProvider>
            </FilterProvider>
          </CartProvider>
        </DBProvider>
      </Theme>
    </>
  );
}
