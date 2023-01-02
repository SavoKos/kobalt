import React from 'react';
import styled from 'styled-components';
import Slider from './Slider';

function Filters() {
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
        defaultValue={[1, 100]}
        labelPrefix='$'
      />
      <Slider
        label='Stars'
        marks={{
          1: `1`,
          5: `5`,
        }}
        min={1}
        max={5}
        defaultValue={[1, 5]}
      />
      <S.Available>
        <input type='checkbox' name='available' id='available' />
        <label htmlFor='available'>Only Available</label>
      </S.Available>
      <p className='apply'>Apply</p>
    </S.Container>
  );
}

export default Filters;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.gray};
  color: #fff;
  border-radius: 1rem;
  height: fit-content;
  padding: 1.5rem;
  justify-content: space-between;
  align-items: center;
  flex-flow: column;
  gap: 2rem;

  label {
    margin-left: 0.5rem;
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    flex-flow: row;
    gap: 0;
    border-radius: 5rem;

    label {
      font-size: 18px;
    }
  }

  .apply {
    color: green;
    background-color: aliceblue;
    border-radius: 10rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
`;

S.Available = styled.div``;
