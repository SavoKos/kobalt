import Link from 'next/link';
import React, { useState } from 'react';
import Spinner from '../components/Spinner';
import { Auth } from '../Theme';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    password: '',
    confirmPassword: '',
    email: '',
    name: '',
  });
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const updateInputValueHandler = (event) => {
    setCredentials((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const signupHandler = (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.confirmPassword)
      return setError('Passwords do not match!');
    return signupUser();
  };

  let errorMessage = '';
  if (error) errorMessage = <p className='error-message'>{error}</p>;

  if (loading) return <Spinner />;

  return (
    <Auth>
      <div className='login-box-formbox'>
        <div className='login-box-signup'>
          Log in to existing account?
          <Link href='/login'> Log in</Link>
        </div>
        <div className='login-box-login'>
          <h1>Welcome to Kobalt</h1>
          <form onSubmit={signupHandler}>
            <div>
              <label htmlFor='name'> Name</label>
              <input
                type='text'
                name='name'
                className='input-name'
                onChange={(event) => updateInputValueHandler(event)}
                required
              />
            </div>
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
            <div>
              <label htmlFor='confirmPassword'> Confirm Password</label>
              <input
                type='password'
                name='confirmPassword'
                className='input-password'
                onChange={(event) => updateInputValueHandler(event)}
                required
              />
            </div>
            {errorMessage}
            <div>
              <button className='login-btn'>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </Auth>
  );
};
export default Signup;
