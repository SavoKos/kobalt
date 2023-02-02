import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import tokenHeader from '../components/tokenHeader';
import useUser from '../context/user';
import axios from '../utils/axiosBackend';

import Spinner from '../components/Spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Categories from '../components/Admin/Categories';

function Admin() {
  const [categories, setCategories] = useState();
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    axios
      .get('/user/admin', { headers: tokenHeader() })
      .then((res) => {
        if (res?.data?.token) return setVerified(true);
      })
      .catch((err) => {
        console.log('ERROR', err);
        router.push('/401');
      })
      .finally(() => setLoading(false));
  }, [router, user]);

  console.log(categories);

  useEffect(() => {
    axios.get('/food/category').then((res) => setCategories(res.data.data));
  }, []);

  if (!verified) return;
  if (loading) return <Spinner />;

  return (
    <S.Container>
      <Navigation homeIcon={true} catalogIcon={true} />
      <S.Admin>
        <Categories
          categories={categories}
          setLoading={setLoading}
          setCategories={setCategories}
          error={error}
          setError={setError}
        />
      </S.Admin>
      <ToastContainer position='bottom-left' />
    </S.Container>
  );
}

export default Admin;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div``;
S.Admin = styled.div`
  padding: 5rem 5%;
  background-color: #fff;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  height: 100%;

  p {
    margin-top: 0.5rem;
  }

  @media screen and (min-width: 768px) {
    padding: 5rem 10%;
    margin: 2rem;
    border-radius: 3rem;
  }

  form {
    min-width: 500px;
  }

  .select {
    min-height: unset;
    margin-bottom: 1rem;
  }

  h4 {
    text-align: center;
    margin: 5rem 0;
  }

  h2 {
    margin-bottom: 5rem;
  }

  h5 {
    margin-bottom: 2rem;
  }

  button {
    width: fit-content;
    outline: 0;
    border: 0;
    background-color: ${({ theme }) => theme.colors.lightOrange};
    color: #fff;
    padding: 0.8rem 1.6rem;
    border-radius: 1rem;
    cursor: pointer;

    &:disabled {
      opacity: 0.3;
    }
  }
`;
