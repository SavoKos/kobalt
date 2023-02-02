import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from '../../utils/axiosBackend';
import Link from 'next/link';

function ResetPassword() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(undefined);

  let errorMessage = '';
  if (error) errorMessage = <p className='error-message'>{error}</p>;

  const continueHandler = () => {
    axios
      .post('/user/forgotPassword', { email })
      .then((res) => {
        console.log(res);
        setError(undefined);
        setSubmitted(true);
      })
      .catch((err) => setError(err?.response?.data?.message));
  };

  return (
    <S.Container>
      <Link href='/'>
        <Image src='/logoGray.png' className='logo' fill alt='logo' />
      </Link>
      {!submitted && (
        <>
          <p>
            Enter the email address associated with your account and we&apos;ll
            send you a link to reset your password.
          </p>
          <input
            type='text'
            id='email'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorMessage}
          <button onClick={continueHandler}>Continue</button>
        </>
      )}
      {submitted && <h5>Reset password link is sent. Check your email!</h5>}
    </S.Container>
  );
}

export default ResetPassword;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  p {
    width: 50%;
    text-align: center;
    margin: auto;
  }

  .logo {
    cursor: pointer;
    max-width: 200px;
    max-height: 80px;
    width: 140px !important;
    height: fit-content !important;
    position: relative !important;
    margin: 1rem 0 1rem 0rem;

    @media screen and (min-width: 768px) {
      width: auto !important;
      height: auto !important;
      margin: 1rem 2rem 1rem 0;
    }
  }

  input {
    color: #000;
    width: 50%;
    padding: 1rem;
    border: 1px solid #bebebe;
    border-radius: 5px;
    font-size: 16px;
    margin: 2rem;

    &::before {
      content: 'Email';
    }
  }

  button {
    outline: 0;
    border: 0;
    padding: 1.5em 2em;
    cursor: pointer;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.lightOrange};
    display: block;
    margin: auto;
    width: 50%;
  }

  h5 {
    margin-top: 2rem;
  }
`;
