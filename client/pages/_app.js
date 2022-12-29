import Head from 'next/head';
import { DBProvider } from '../context/dbContext';
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
          <Component {...pageProps} />
        </DBProvider>
      </Theme>
    </>
  );
}
