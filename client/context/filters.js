import { createContext, useContext, useState } from 'react';

export const FiltersContext = createContext();

const useFilters = () => {
  return useContext(FiltersContext);
};

export const FiltersProvider = ({ children }) => {
  const [stars, setStars] = useState([1, 5]);
  const [price, setPrice] = useState([1, 100]);
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [food, setFood] = useState([]);

  console.log('FOOD', food);

  const resetFilters = () => {
    setStars([1, 5]);
    setPrice([1, 100]);
    setOnlyAvailable(false);
  };

  const value = {
    stars,
    setStars,
    price,
    setPrice,
    onlyAvailable,
    setOnlyAvailable,
    food,
    setFood,
    resetFilters,
  };

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  );
};

export default useFilters;
