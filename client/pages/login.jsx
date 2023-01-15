import React, { useState } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import Link from 'next/link';
import Spinner from '../components/Spinner';
import { Auth } from '../Theme';

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    password: '',
    email: '',
  });
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const updateInputValueHandler = (event) => {
    setCredentials((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const loginUser = () => {
    setLoading(true);
    login(credentials.email, credentials.password)
      .then((user) => {
        Router.replace('/');
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError(error.message);
      });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    return loginUser();
  };

  let errorMessage = '';

  if (error) errorMessage = <p className='error-message'>{error}</p>;

  if (loading) return <Spinner />;

  return (
    <Auth>
      <div className='login-box-formbox'>
        <div className='login-box-signup'>
          Don't have an account?
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
              <Link href='/resetpassword' className='resetPassword'>
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
