import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BUTTON_ICONS } from '/src/components/shared/constants';

export const getButtonIcon = (icon) => {
  switch (icon) {
    case BUTTON_ICONS.ADD:
      return <FontAwesomeIcon icon="plus" />;
    default: 
      return undefined;
  }
};
