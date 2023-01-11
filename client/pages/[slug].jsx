import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Navigation from '../components/Home/Navigation';
import Hero from '../components/SingleFood/Hero';
import Spinner from '../components/Spinner';
import axios from '../utils/axiosBackend';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Footer from '../components/Home/Footer';
import PopularCategory from '../components/Home/PopularCategory';
import styled from 'styled-components';

function Food() {
  const [loading, setLoading] = useState(true);
  const [food, setFood] = useState([]);
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    if (!slug) return;
    axios.get(`/food/${slug}`).then((res) => {
      setFood(res.data.data);
      setLoading(false);
    });
  }, [slug]);

  if (loading) return <Spinner />;
  return (
    <div>
      <Navigation />
      <Hero food={food} />
      <PopularCategory />
      <S.Footer>
        <Footer />
      </S.Footer>
      <ToastContainer position='bottom-left' />
    </div>
  );
}

export default Food;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Footer = styled.div`
  margin-top: 20rem;
`;
