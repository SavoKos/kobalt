import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Head from '../components/Head';
import Spinner from '../components/Spinner';
import useUser from '../context/user';
import { Auth } from '../Theme';
import axios from '../utils/axiosBackend';

const Signup = () => {
  const [credentials, setCredentials] = useState({
    password: '',
    confirmPassword: '',
    email: '',
    name: '',
  });
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const { setUser } = useUser();
  const updateInputValueHandler = (event) => {
    setCredentials((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const router = useRouter();

  const signupHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post('/user/register', credentials)
      .then((res) => {
        Cookies.set('jwt', res?.data?.token);
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
    <>
      <Head title='Register' description='Kobalt register' link='/register' />
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
    </>
  );
};
export default Signup;
