import Image from 'next/image';
import React, { useState } from 'react';
import axios from '../../utils/axiosBackend';
import Link from 'next/link';
import { ResetPassword } from '../../Theme';
import Head from '../../components/Head';

function ResetPass() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(undefined);

  let errorMessage = '';
  if (error) errorMessage = <p className='error-message'>{error}</p>;

  const continueHandler = () => {
    axios
      .post('/user/forgotPassword', { email })
      .then((res) => {
        setError(undefined);
        setSubmitted(true);
      })
      .catch((err) => setError(err?.response?.data?.message));
  };

  return (
    <>
      <Head
        title='Reset Password'
        description='Reset Password'
        link='/resetpassword'
      />
      <ResetPassword>
        <Link href='/'>
          <Image src='/logoGray.png' className='logo' fill alt='logo' />
        </Link>
        {!submitted && (
          <>
            <p>
              Enter the email address associated with your account and
              we&apos;ll send you a link to reset your password.
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
      </ResetPassword>
    </>
  );
}

export default ResetPass;
