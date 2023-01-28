import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useUser from '../../context/user';
import { Auth } from '../../Theme';
import axios from '../../utils/axiosBackend';

function UserData() {
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
          <button className='login-btn'>Update</button>
        </div>
      </form>
    </Auth>
  );
}

export default UserData;
