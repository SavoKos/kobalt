import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import tokenHeader from '../components/tokenHeader';
import useUser from '../context/user';
import axios from '../utils/axiosBackend';
import Select from 'react-select';
import url from '../utils/url';
import Spinner from '../components/Spinner';
import Modal from '../components/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function Admin({ initialCategories }) {
  const [categories, setCategories] = useState(initialCategories);
  const [verified, setVerified] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const [loading, setLoading] = useState(true);
  const [modalActive, setModalActive] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { user } = useUser();
  const options = categories?.map((category) => ({
    value: category.category,
    label: category.category[0].toUpperCase() + category.category.slice(1),
  }));

  const getCategories = async () => {
    const data = await axios.get('/food/category');
    return data.data.data;
  };

  const deleteHandler = () => {
    setLoading(true);

    axios
      .delete(`/food/${selectedValue.value}`)
      .then(async () => {
        toast.success(
          `${selectedValue.label} category is successfully deleted!`
        );
        setSelectedValue('');
        setCategories(await getCategories());
        setError('');
      })
      .catch((err) => setError(err?.response?.data?.message))
      .finally(() => setLoading(false));
    setModalActive(false);
  };

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
  if (!verified) return;
  if (loading) return <Spinner />;

  let errorMessage = '';
  if (error) errorMessage = <p className='error-message'>{error}</p>;

  return (
    <S.Container>
      <Navigation homeIcon={true} catalogIcon={true} />
      <S.Admin>
        <h2>Categories</h2>
        <Select
          value={selectedValue}
          options={options}
          onChange={(e) => setSelectedValue(e)}
          className='select'
        />
        <button disabled={!selectedValue} onClick={() => setModalActive(true)}>
          Remove Category
        </button>
        {errorMessage}
      </S.Admin>
      <Modal active={modalActive}>
        <h6>Are you sure you want to delete this category?</h6>
        <h6>All food in this category will also be deleted.</h6>
        <S.Buttons>
          <button className='delete' onClick={deleteHandler}>
            Delete
          </button>
          <button onClick={() => setModalActive(false)}>Cancel</button>
        </S.Buttons>
      </Modal>
      <ToastContainer position='bottom-left' />
    </S.Container>
  );
}

export default Admin;

export async function getStaticProps() {
  const res = await fetch(`${url}/food/category`);
  const data = await res.json();

  return {
    props: { initialCategories: data.data, revalidate: 5 },
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

S.Buttons = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  button {
    outline: 0;
    border: 0;
    background-color: ${({ theme }) => theme.colors.lightGray};
    color: #000;
    padding: 1rem 2rem;
    border-radius: 1rem;
    cursor: pointer;

    &.delete {
      background-color: #cc0000;
      color: #fff;
    }
  }
`;
