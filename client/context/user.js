import Cookies from 'js-cookie';
import { createContext, useContext, useEffect, useState } from 'react';
import tokenHeader from '../components/tokenHeader';
import axios from '../utils/axiosBackend';

export const UserContext = createContext();

const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const token = Cookies.get('jwt');
  const [user, setUser] = useState({});

  useEffect(() => {
    if (!token) return;
    axios
      .get('/user/bytoken', { headers: tokenHeader() })
      .then((res) => {
        if (res?.data?.user) return setUser(res.data.user);
      })
      .catch((err) => {
        console.log('ERROR', err);
      });
  }, [token]);

  const value = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default useUser;
