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
    <S.Container>
      <S.Navigation>
        <Navigation link='/catalog' />
      </S.Navigation>
      <div>
        <Hero />
        <PopularCategory />
        <OurProduction />
        <Footer />
        <ToastContainer position='bottom-left' />
      </div>
    </S.Container>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.Navigation = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
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

  input {
    flex: 1;
  }

  .logo {
    cursor: pointer;
    max-width: 200px;
    max-height: 80px;
    width: 140px !important;
    height: fit-content !important;
    margin: 1rem 0 1rem 0rem;

    @media screen and (min-width: 768px) {
      width: auto !important;
      height: auto !important;
      margin: 1rem 2rem 1rem 2rem;
    }
    position: relative !important;
  }
`;
S.Container = styled.div``;
