import React, { useState } from 'react';
import Accordion from './Accordion';

function Accordions() {
  const [activeAccordion, setActiveAccordion] = useState('');

  return (
    <div>
      <Accordion
        content='filters'
        activeAccordion={activeAccordion}
        setActiveAccordion={setActiveAccordion}
      />
      <Accordion
        content='categories'
        activeAccordion={activeAccordion}
        setActiveAccordion={setActiveAccordion}
      />
    </div>
  );
}

export default Accordions;
