import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useUser from '../../context/user';
import { Auth, Buttons } from '../../Theme';
import axios from '../../utils/axiosBackend';
import Modal from '../Modal';
import Spinner from '../Spinner';

function UserData() {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const router = useRouter();
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
    setLoading(true);
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
      .catch((err) => setError(err.response.data.message))
      .finally(() => setLoading(false));
  };

  const deleteHandler = () => {
    setLoading(true);
    axios
      .delete(`/user/${user._id}`)
      .then((res) => router.push('/login'))
      .catch((err) => {
        setModalActive(false);
        Cookies.remove('jwt');
        setUser({});
        setError(err.response.data.message);
      })
      .finally(() => setLoading(false));
  };

  if (loading) return <Spinner />;

  return (
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
          <button className='login-btn' type='submit'>
            Update
          </button>
        </div>
        <div>
          <button
            className='delete-btn'
            type='button'
            onClick={() => setModalActive(true)}
          >
            Delete my account
          </button>
        </div>
      </form>
      <Modal active={modalActive} setModalActive={setModalActive}>
        <h6>Are you sure you want to delete this user?</h6>
        <h6>This action is irreversible.</h6>
        <Buttons>
          <button className='red' onClick={deleteHandler}>
            Delete
          </button>
          <button onClick={() => setModalActive(false)}>Cancel</button>
        </Buttons>
      </Modal>
    </Auth>
  );
}

export default UserData;
