import { createContext, useContext, useEffect, useState } from 'react';

export const CategoriesContext = createContext();

const useCategories = () => {
  return useContext(CategoriesContext);
};

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const value = {
    categories,
    setCategories,
  };

  console.log('CATEGORIES', categories);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default useCategories;
