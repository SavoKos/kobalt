import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';

function Icon({ icon, className, dataItems }) {
  return (
    <FontAwesomeIcon icon={icon} className={className} data-items={dataItems} />
  );
}

export default Icon;
