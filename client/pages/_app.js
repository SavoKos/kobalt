import '../styles/globals.css';
import Theme from '../Theme';

export default function App({ Component, pageProps }) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}
