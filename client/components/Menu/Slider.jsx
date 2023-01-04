import RcSlider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styled from 'styled-components';

function Slider({ marks, min, max, label, labelPrefix, applyFilter, value }) {
  const rangeChangeHandler = (value) => applyFilter(value);

  return (
    <S.Container>
      <p>
        {label} ({labelPrefix}
        {value[0]} - {labelPrefix}
        {value[1]})
      </p>
      <RcSlider
        range
        marks={marks}
        min={min}
        max={max}
        step={1}
        value={value}
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

    .rc-slider-handle {
      border: 1px solid ${({ theme }) => theme.colors.darkOrange};

      &:active {
        box-shadow: 0 0 5px ${({ theme }) => theme.colors.darkOrange};
      }
    }

    .rc-slider-track {
      background-color: ${({ theme }) => theme.colors.darkOrange};
    }

    span {
      color: #fff;
      @media screen and (min-width: 768px) {
        color: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;

export default Slider;
