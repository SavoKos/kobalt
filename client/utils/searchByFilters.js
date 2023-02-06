import React from 'react';
import useFilters from '../context/filters';
import axios from './axiosBackend';

function searchByFilters(
  category,
  stars,
  price,
  onlyAvailable,
  setFood,
  search
) {
  return axios
    .post(`/food/category/${category}`, {
      minStars: stars[0],
      maxStars: stars[1],
      minPrice: price[0],
      maxPrice: price[1],
      onlyAvailable,
      search,
    })
    .then((res) => setFood(res.data.data))
    .catch((err) => console.log(err));
}

export default searchByFilters;
