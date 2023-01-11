import React, { useState } from 'react';
import styled from 'styled-components';
import useFilter from '../../context/filter';
import Slider from './Slider';
import { BiReset } from 'react-icons/bi';
import { AiFillCheckCircle } from 'react-icons/ai';

function Filters({ setMenuActive }) {
  const [checked, setChecked] = useState(false);
  const [price, setPriceSlider] = useState([1, 100]);
  const [stars, setStarsSlider] = useState([1, 5]);
  const { setPrice, setStars, setOnlyAvailable, resetFilters } = useFilter();

  const addFilters = () => {
    setPrice(price);
    setStars(stars);
    setOnlyAvailable(checked);
    setMenuActive && setMenuActive(false);
  };

  const resetFiltersUI = () => {
    setPriceSlider([1, 100]);
    setStarsSlider([1, 5]);
    setChecked(false);
    resetFilters();
    setMenuActive && setMenuActive(false);
  };

  function toggle(value) {
    return !value;
  }

  return (
    <S.Container>
      <Slider
        label='Price'
        marks={{
          1: `$1`,
          100: `$100`,
        }}
        min={1}
        max={100}
        labelPrefix='$'
        applyFilter={setPriceSlider}
        value={price}
      />
      <Slider
        label='Stars'
        marks={{
          1: `1`,
          5: `5`,
        }}
        min={1}
        max={5}
        applyFilter={setStarsSlider}
        value={stars}
      />
      <S.Available>
        <input
          type='checkbox'
          name='available'
          id='available'
          checked={checked}
          onChange={() => setChecked(toggle)}
        />
        <label htmlFor='available'>Only Available</label>
      </S.Available>
      <S.Icons>
        <BiReset className='reset' onClick={resetFiltersUI} />
        <AiFillCheckCircle className='apply' onClick={addFilters} />
      </S.Icons>
    </S.Container>
  );
}

export default Filters;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.gray};
  height: fit-content;
  padding: 1.5rem;
  justify-content: space-between;
  align-items: center;
  flex-flow: column;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 1rem;

  @media screen and (min-width: 768px) {
    margin-bottom: -5rem;
  }

  label {
    margin-left: 0.5rem;
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    color: ${({ theme }) => theme.colors.gray};
    background-color: ${({ theme }) => theme.colors.lightGray};
    border-radius: 1rem;
    flex-flow: row;
    gap: 0;

    label {
      font-size: 18px;
    }
  }
`;

S.Available = styled.div`
  flex: 0;
  @media screen and (min-width: 900px) {
    flex: unset;
  }
`;

S.Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 30px;
    color: #ff3333;
    cursor: pointer;

    &.apply {
      color: #07bc0c;
    }
  }
  padding: 1rem;
`;