import { createContext, useContext, useState } from 'react';

export const FilterContext = createContext();

const useFilter = () => {
  return useContext(FilterContext);
};

export const FilterProvider = ({ children }) => {
  const [stars, setStars] = useState([1, 5]);
  const [price, setPrice] = useState([1, 100]);
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  const resetFilters = () => {
    setStars([1, 5]);
    setPrice([1, 100]);
    setOnlyAvailable(false);
  };

  console.log(stars, price, onlyAvailable);

  const value = {
    stars,
    price,
    onlyAvailable,
    setStars,
    setPrice,
    setOnlyAvailable,
    resetFilters,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export default useFilter;
