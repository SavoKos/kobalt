import Footer from '../components/Home/Footer';
import Hero from '../components/Home/Hero';
import OurProduction from '../components/Home/OurProduction';
import PopularCategory from '../components/Home/PopularCategory';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Navigation from '../components/Navigation';
import styled from 'styled-components';
import axios from '../utils/axiosBackend';

export default function Home({ categories, food }) {
  return (
    <>
      <div>
        <S.Navigation>
          <Navigation link='/' />
        </S.Navigation>
        <Hero />
        <PopularCategory categories={categories} food={food} />
        <OurProduction categories={categories} food={food} />
        <Footer />
        <ToastContainer position='bottom-left' />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const fetched = await Promise.all([
    axios.get('/food/category'),
    axios.get('/food'),
  ]);

  const data = fetched.map((arr) => arr.data.data);

  return {
    props: { categories: data[0], food: data[1] },
  };
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
