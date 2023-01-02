import RcSlider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styled from 'styled-components';
import { useState } from 'react';

function Slider({ marks, min, max, defaultValue, label, labelPrefix }) {
  const [sliderValue, setSliderValue] = useState(defaultValue);
  console.log(sliderValue);

  const rangeChangeHandler = (value) => setSliderValue(value);

  return (
    <S.Container>
      <p>
        {label}({labelPrefix}
        {sliderValue[0]} - {labelPrefix}
        {sliderValue[1]})
      </p>
      <RcSlider
        range
        marks={marks}
        min={min}
        max={max}
        defaultValue={defaultValue}
        step={1}
        value={sliderValue}
        onChange={rangeChangeHandler}
      />
    </S.Container>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  flex: 1;

  @media screen and (min-width: 768px) {
    max-width: 30%;
  }

  p {
    padding-left: 1rem;
  }

  * {
    opacity: 1;
  }

  .apply-metacritic {
    font-size: 1.3rem;
    cursor: pointer;
    margin-right: 0.5rem;
    color: green;
  }

  .rc-slider {
    margin: 0 1rem;

    span {
      color: #fff;
    }
  }
`;

export default Slider;
