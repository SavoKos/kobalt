import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import tokenHeader from '../components/tokenHeader';
import useUser from '../context/user';
import axios from '../utils/axiosBackend';
import Select from 'react-select';
import url from '../utils/url';

function Admin({ categories }) {
  console.log(categories);
  const [verified, setVerified] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const router = useRouter();
  const { user } = useUser();
  const options = categories.map((category) => ({
    value: category.category,
    label: category.category[0].toUpperCase() + category.category.slice(1),
  }));

  useEffect(() => {
    axios
      .get('/user/admin', { headers: tokenHeader() })
      .then((res) => {
        if (res?.data?.token) return setVerified(true);
      })
      .catch((err) => {
        console.log('ERROR', err);
        router.push('/401');
      });
  }, [router, user]);
  if (!verified) return;

  console.log(selectedValue);

  return (
    <S.Container>
      <Navigation homeIcon={true} catalogIcon={true} />
      <S.Admin>
        <h2>Categories</h2>
        <Select
          value={selectedValue}
          options={options}
          onChange={(e) => setSelectedValue(e)}
        />
      </S.Admin>
    </S.Container>
  );
}

export default Admin;

export async function getStaticProps() {
  console.log('GET STARIC PROPS');
  const res = await fetch(`${url}/food/category`);
  const data = await res.json();

  return {
    props: { categories: data.data },
  };
}

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

  @media screen and (min-width: 768px) {
    padding: 5rem 10%;
    margin: 2rem;
    border-radius: 3rem;
  }

  form {
    min-width: 500px;
  }

  & > div {
    min-height: unset;
    margin-bottom: 5rem;
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
`;
