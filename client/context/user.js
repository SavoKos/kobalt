import Cookies from 'js-cookie';
import { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  console.log(user);

  const value = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default useUser;
