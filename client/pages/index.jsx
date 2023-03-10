import Footer from '../components/Home/Footer';
import Hero from '../components/Home/Hero';
import OurProduction from '../components/Home/OurProduction';
import PopularCategory from '../components/Home/PopularCategory';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Navigation from '../components/Navigation';
import styled from 'styled-components';
import url from '../utils/url';
import { useEffect, useState } from 'react';
import Head from '../components/Head';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [food, setFood] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await Promise.all([
        fetch(`${url}/food/category`),
        fetch(`${url}/food`),
      ]);
      const fetched = await Promise.all(res.map((r) => r.json()));

      const data = fetched.map((arr) => arr.data);
      setCategories(data[0]);
      setFood(data[1]);
    }
    fetchData();
  }, []);

  return (
    <>
      <Head />
      <S.Container>
        <Navigation cartIcon={true} catalogIcon={true} />
        <Hero />
        <PopularCategory categories={categories} food={food} />
        <OurProduction categories={categories} food={food} />
        <Footer />
        <ToastContainer position='bottom-left' />
      </S.Container>
    </>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  nav {
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
  }
`;
