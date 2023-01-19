import Footer from '../components/Home/Footer';
import Hero from '../components/Home/Hero';
import OurProduction from '../components/Home/OurProduction';
import PopularCategory from '../components/Home/PopularCategory';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Navigation from '../components/Navigation';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <div>
        <S.Navigation>
          <Navigation link='/' />
        </S.Navigation>
        <Hero />
        <PopularCategory />
        <OurProduction />
        <Footer />
        <ToastContainer position='bottom-left' />
      </div>
    </>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Navigation = styled.div`
  background: #f46b45; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #eea849,
    #f46b45
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #eea849,
    #f46b45
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
