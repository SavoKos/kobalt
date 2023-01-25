import Head from 'next/head';
import { CartProvider } from '../context/cart';
import { CategoriesProvider } from '../context/categories';
import { FiltersProvider } from '../context/filters';
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
        <CartProvider>
          <UserProvider>
            <CategoriesProvider>
              <FiltersProvider>
                <Component {...pageProps} />
              </FiltersProvider>
            </CategoriesProvider>
          </UserProvider>
        </CartProvider>
      </Theme>
    </>
  );
}
