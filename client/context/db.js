import { createContext, useContext, useEffect, useState } from 'react';
import axios from '../utils/axiosBackend';

export const DBContext = createContext();

const useDB = () => {
  return useContext(DBContext);
};

export const DBProvider = ({ children }) => {
  const [food, setFood] = useState([]);
  const [categories, setCategories] = useState([]);
  console.log(categories);

  useEffect(() => {
    axios.get('/food').then((res) => setFood(res.data.data));
    axios.get('/food/category').then((res) => {
      console.log(res.data.data);
      setCategories(res.data.data);
    });
  }, []);

  const value = {
    food,
    categories,
  };

  return <DBContext.Provider value={value}>{children}</DBContext.Provider>;
};

export default useDB;
