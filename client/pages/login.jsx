import React, { useState } from 'react';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';
import Spinner from '../components/Spinner';
import { Auth } from '../Theme';
import axios from '../utils/axiosBackend';
import Cookies from 'js-cookie';
import useUser from '../context/user';

const Login = () => {
  const [credentials, setCredentials] = useState({
    password: '',
    email: '',
  });
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const { setUser } = useUser();
  const router = useRouter();

  const updateInputValueHandler = (event) => {
    setCredentials((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post('/user/login', credentials)
      .then((res) => {
        Cookies.set('jwt', res.data.token);
        setUser(res.data.user);
        router.push('/');
      })
      .catch((err) => {
        setError(err?.response?.data?.message);
        setLoading(false);
      });
  };

  let errorMessage = '';

  if (error) errorMessage = <p className='error-message'>{error}</p>;

  if (loading) return <Spinner />;

  return (
    <Auth>
      <div className='login-box-formbox'>
        <div className='login-box-signup'>
          Don&apos;t have an account?
          <Link href='/register'> Register</Link>
        </div>
        <div className='login-box-login'>
          <h1>Welcome back to Kobalt</h1>
          <form onSubmit={loginHandler}>
            <div>
              <label htmlFor='email'> E-Mail</label>
              <input
                type='email'
                name='email'
                className='input-email'
                onChange={(event) => updateInputValueHandler(event)}
                required
              />
            </div>
            <div>
              <label htmlFor='password'> Password</label>
              <input
                type='password'
                name='password'
                className='input-password'
                onChange={(event) => updateInputValueHandler(event)}
                required
              />
            </div>
            {errorMessage}
            <div>
              <button className='login-btn'>Log in</button>
              <Link href='/forgotpassword' className='resetPassword'>
                <p>Forgot Password?</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Auth>
  );
};

export default Login;
