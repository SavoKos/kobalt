import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';

function Icon({ icon, className }) {
  return <FontAwesomeIcon icon={icon} className={className} />;
}

export default Icon;
