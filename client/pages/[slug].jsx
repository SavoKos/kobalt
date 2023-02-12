import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/SingleFood/Hero';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Footer from '../components/Home/Footer';
import PopularCategory from '../components/Home/PopularCategory';
import styled from 'styled-components';
import url from '../utils/url';
import { useRouter } from 'next/router';
import Review from '../components/Review';
import useUser from '../context/user';
import Spinner from '../components/Spinner';

function Food() {
  const router = useRouter();
  const { slug } = router.query;
  const [categories, setCategories] = useState([]);
  const [food, setFood] = useState([]);
  const { user } = useUser();
  useEffect(() => {
    if (!slug) return;
    async function fetchData() {
      const res = await Promise.all([
        fetch(`${url}/food/category`),
        fetch(`${url}/food/${slug}`),
      ]);

      const fetched = await Promise.all(res.map((r) => r.json()));

      const data = fetched.map((arr) => arr.data);

      setFood(data[1]);
      setCategories(data[0]);
    }

    fetchData();
  }, [slug, user._id]);

  if (!food?.food?._id) return <Spinner />;

  return (
    <div>
      <Navigation cartIcon={true} homeIcon={true} catalogIcon={true} />
      <Hero food={food?.food} reviews={food?.review} />
      <Review foodId={food?.food?._id} reviews={food?.review} />
      <PopularCategory categories={categories} />
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
