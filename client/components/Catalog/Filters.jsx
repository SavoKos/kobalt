import React, { useState } from 'react';
import styled from 'styled-components';
import useFilters from '../../context/filters';

function Filters({ closeAccordion }) {
  const {
    setPrice,
    setStars,
    setOnlyAvailable,
    resetFilters,
    price,
    stars,
    onlyAvailable,
  } = useFilters();
  const [available, setAvailable] = useState(onlyAvailable);
  const [priceFilter, setPriceFilter] = useState(price || [1, 100]);
  const [ratingFilter, setRatingFilter] = useState(stars || [1, 5]);

  const addFilters = (e) => {
    e.preventDefault();
    setPrice(priceFilter);
    setStars(ratingFilter);
    setOnlyAvailable(available);
  };

  const resetHandler = () => {
    setPriceFilter([1, 100]);
    setRatingFilter([1, 5]);
    setAvailable(false);
    resetFilters();
    closeAccordion && closeAccordion();
  };

  function toggle(value) {
    return !value;
  }

  return (
    <S.Container onSubmit={addFilters}>
      <p>Price</p>
      <S.Filter>
        <input
          type='number'
          placeholder='From'
          min={1}
          max={100}
          onChange={(e) => setPriceFilter([+e.target.value, priceFilter[1]])}
          value={priceFilter[0]}
        />
        <input
          type='number'
          placeholder='To'
          min={1}
          max={100}
          onChange={(e) => setPriceFilter([priceFilter[0], +e.target.value])}
          value={priceFilter[1]}
        />
      </S.Filter>

      <p className='rating'>Rating</p>
      <S.Filter>
        <input
          type='number'
          placeholder='From'
          min={1}
          max={5}
          onChange={(e) => setRatingFilter([+e.target.value, ratingFilter[1]])}
          value={ratingFilter[0]}
        />
        <input
          type='number'
          placeholder='To'
          min={1}
          max={5}
          onChange={(e) => setRatingFilter([ratingFilter[0], +e.target.value])}
          value={ratingFilter[1]}
        />
      </S.Filter>
      <S.Available>
        <input
          type='checkbox'
          name='available'
          id='available'
          checked={available}
          onChange={() => setAvailable(toggle)}
        />
        <label htmlFor='available'>Only Available</label>
      </S.Available>
      <S.Buttons>
        <button className='reset' onClick={resetHandler} type='reset'>
          Reset
        </button>
        <button className='apply' type='submit'>
          Apply
        </button>
      </S.Buttons>
    </S.Container>
  );
}

export default Filters;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.form`
  display: flex;
  color: ${({ theme }) => theme.colors.gray};
  height: fit-content;
  padding: 1.5rem;
  justify-content: space-between;
  flex-flow: column;
  align-items: flex-start;

  p.rating {
    margin-top: 2rem;
  }

  label {
    margin-left: 0.5rem;
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    color: ${({ theme }) => theme.colors.gray};
    border-radius: 1rem;
    gap: 0;

    label {
      font-size: 18px;
    }
  }
`;

S.Available = styled.div`
  flex: 0;
  margin-top: 2rem;
  @media screen and (min-width: 900px) {
    flex: unset;
  }
`;

S.Buttons = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  gap: 1rem;
  padding: 1rem;

  button {
    padding: 0.5rem 1rem;
    outline: 0;
    border: 0;
    border-radius: 1rem;
    color: #fff;
    background-color: #00b91c;
    cursor: pointer;

    &.reset {
      background-color: #ff3131;
    }
  }
`;

S.Filter = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  width: 100%;

  input {
    width: 100px;
    outline: 0;
    border: 0;
    border-radius: 1rem;
    padding: 0.5rem;
    width: 100%;
  }
`;
