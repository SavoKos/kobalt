import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import ProtectedRoute from '../components/ProtectedRoute';
import useUser from '../context/user';
import { Auth } from '../Theme';
import axios from '../utils/axiosBackend';

function Profile() {
  const { user, setUser } = useUser();
  const [credentials, setCredentials] = useState({
    password: '',
    confirmPassword: '',
    email: '',
    name: '',
  });
  const [error, setError] = useState(undefined);
  const updateInputValueHandler = (event) => {
    setCredentials((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  console.log(user);

  let errorMessage = '';
  if (error) errorMessage = <p className='error-message'>{error}</p>;

  useEffect(() => {
    setCredentials((prevState) => ({
      ...prevState,
      name: user.name,
      email: user.email,
    }));
  }, [user]);

  const updateHandler = (e) => {
    e.preventDefault();
    axios
      .patch(`/user/${user._id}`, credentials)
      .then((res) => {
        toast.success('Profile is successfully updated!');
        setUser(res.data.data);
        setError(undefined);
        setCredentials({
          password: '',
          confirmPassword: '',
          email: res.data.data.email,
          name: res.data.data.name,
        });
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.message);
      });
  };
  console.log(credentials);

  console.log(user);
  return (
    <ProtectedRoute>
      <Navigation cartIcon={true} homeIcon={true} catalogIcon={true} />
      <S.Profile>
        <h2>Settings</h2>
        <Auth>
          <form onSubmit={updateHandler}>
            <div>
              <label htmlFor='name'> Name</label>
              <input
                type='text'
                name='name'
                className='input-name'
                onChange={(event) => updateInputValueHandler(event)}
                required
                value={credentials.name}
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
                value={credentials.email}
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
                value={credentials.password}
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
                value={credentials.confirmPassword}
              />
            </div>
            {errorMessage}
            <div>
              <button className='login-btn'>Update</button>
            </div>
          </form>
        </Auth>
        <h2>Orders</h2>
      </S.Profile>
      <ToastContainer position='bottom-left' />
    </ProtectedRoute>
  );
}

export default Profile;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Profile = styled.div`
  padding: 5rem 5%;
  background-color: #fff;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  height: 100%;

  @media screen and (min-width: 768px) {
    padding: 5rem 10%;
    margin: 2rem;
    border-radius: 3rem;
  }

  form {
    min-width: 500px;
  }

  & > div {
    min-height: unset;
    margin-bottom: 5rem;
  }
`;
