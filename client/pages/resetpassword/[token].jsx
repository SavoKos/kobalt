import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { ResetPassword } from '../../Theme';
import axios from '../../utils/axiosBackend';
import Link from 'next/link';

function ResetPass() {
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
    <ResetPassword>
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
    </ResetPassword>
  );
}

export default ResetPass;
