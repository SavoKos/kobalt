import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import styled from 'styled-components';
import Categories from './Categories';
import Filters from './Filters';

function Accordion({ content, activeAccordion, setActiveAccordion }) {
  const renderContent =
    content === 'filters' ? (
      <Filters closeAccordion={() => setActiveAccordion('')} />
    ) : (
      <Categories closeAccordion={() => setActiveAccordion('')} />
    );

  return (
    <S.Accordion>
      <S.AccordionHead
        onClick={() =>
          setActiveAccordion(content === activeAccordion ? '' : content)
        }
      >
        <p>{content[0].toUpperCase() + content.slice(1)}</p>
        <BsArrowRight />
      </S.AccordionHead>
      <S.AccordionContent active={content === activeAccordion}>
        {renderContent}
      </S.AccordionContent>
    </S.Accordion>
  );
}

export default Accordion;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Accordion = styled.div`
  border-radius: 1rem;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    display: none;
  }

  .categories {
    display: block !important;
    background-color: transparent;
  }
  margin-bottom: 0.5rem;
`;
S.AccordionContent = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  display: ${({ active }) => (active ? 'block' : 'none')};
`;

S.AccordionHead = styled.div`
  padding: 1rem 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkOrange};
  justify-content: space-between;
  transition: all ease 0.3s;
  cursor: pointer;

  p,
  svg {
    color: #fff;
  }

  &:hover {
    filter: brightness(1.5);
  }
`;
