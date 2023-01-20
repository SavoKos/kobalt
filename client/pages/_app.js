import Head from 'next/head';
import { CartProvider } from '../context/cart';
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
            <Component {...pageProps} />
          </UserProvider>
        </CartProvider>
      </Theme>
    </>
  );
}
