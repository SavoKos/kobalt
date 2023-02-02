import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from '../../utils/axiosBackend';
import Link from 'next/link';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(undefined);
  const router = useRouter();
  const { token } = router.query;

  let errorMessage = '';
  if (error) errorMessage = <p className='error-message'>{error}</p>;

  const resetHandler = () => {
    axios
      .patch(`/user/resetPassword/${token}`, { password, confirmPassword })
      .then((res) => {
        router.push('/login');
        setError(undefined);
      })
      .catch((err) => setError(err?.response?.data?.message));
  };

  return (
    <S.Container>
      <Link href='/'>
        <Image src='/logoGray.png' className='logo' fill alt='logo' />
      </Link>
      <input
        type='password'
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type='password'
        placeholder='Confirm Password'
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {errorMessage}
      <button onClick={resetHandler}>Reset Password</button>
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
    margin-top: 1rem;

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
    margin-top: 1rem;
  }

  h5 {
    margin-top: 2rem;
  }
`;
