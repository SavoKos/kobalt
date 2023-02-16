import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import axios from '../../utils/axiosBackend';
import Spinner from '../Spinner';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  let errorMessage = '';
  if (error) errorMessage = <p className='error-message'>{error}</p>;

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post('/newsletter', { email: email })
      .then(() => {
        toast.success('Thank you for subscribing to our newsletter.');
        setError('');
      })
      .catch((err) => setError(err?.response?.data?.message))
      .finally(() => {
        setLoading(false);
        setEmail('');
      });
  };

  return (
    <S.Container>
      <div>
        <p>{errorMessage}</p>
        <Image
          src='/newsletter.png'
          fill
          className='bg'
          alt='logo'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
        <Image
          src='/girleatingpizza.png'
          width={200}
          height={243}
          className='portrait'
          alt='girleatingpizza'
        />
        <S.Center>
          <h3>
            <span>Subscribe</span> <br />
            to news
          </h3>
          <S.Form onSubmit={submitHandler} loading={loading}>
            <input
              type='email'
              placeholder='Enter your email'
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <button type='submit'>
              <p>Subscribe</p>
              {loading && <Spinner />}
            </button>
          </S.Form>
        </S.Center>
      </div>
    </S.Container>
  );
}

export default Newsletter;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  position: absolute;
  top: -103px;
  border-radius: 5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;

  p {
    float: right;
  }

  .bg {
    width: 100% !important;
    height: 200px !important;
    position: relative !important;
    inset: unset !important;
    border-radius: 1rem;
  }

  .portrait {
    position: absolute;
    bottom: 5px;
    left: 50px;
    transform: scaleX(-1);
  }

  @media screen and (min-width: 768px) {
    width: 80%;
  }
`;

S.Center = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  color: #fff;
  width: 80%;
  flex-wrap: wrap;
  justify-content: center;

  h3 {
    top: 0;
    text-transform: uppercase;
    text-align: right;

    span {
      font-weight: 400;
    }
  }
`;

S.Form = styled.form`
  display: flex;
  width: 100%;
  position: relative;
  flex: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  input {
    border-radius: 10rem;
    border: 0;
    outline: 0;
    background-color: #fffffff7;
    padding: 0.8rem 1.5rem;
    width: 100%;
    color: #000;
  }

  button {
    position: relative;
    right: 0;
    border: 0;
    outline: 0;
    border-radius: 2rem;
    padding: 0.8rem 1.5rem;
    background-color: ${({ theme }) => theme.colors.lightOrange};
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 500;
    margin-top: 0.5rem;
    cursor: pointer;

    p {
      visibility: ${({ loading }) => (loading ? 'hidden' : 'visible')};
      font-size: 16px;
    }
  }

  @media screen and (min-width: 768px) {
    flex: 50%;
    margin-left: 3rem;

    button {
      position: absolute;
      margin: auto;
      display: block;
      margin-top: 0;
    }

    button,
    input {
      padding: 1rem 2rem;
    }
  }
`;
