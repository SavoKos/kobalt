import React, { useState } from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';

function Accordions() {
  const [activeAccordion, setActiveAccordion] = useState('');

  return (
    <S.Container>
      <Accordion
        content='categories'
        activeAccordion={activeAccordion}
        setActiveAccordion={setActiveAccordion}
      />
      <Accordion
        content='filters'
        activeAccordion={activeAccordion}
        setActiveAccordion={setActiveAccordion}
      />
    </S.Container>
  );
}

export default Accordions;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  grid-column: 1/3;
  padding-left: 2rem;
  @media screen and (min-width: 768px) {
    grid-column: 1/2;
  }
`;
