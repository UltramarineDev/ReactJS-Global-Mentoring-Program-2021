import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//TODO: update buttonIcons
import { buttonIcons } from '/src/components/shared/constants';

export const getButtonIcon = (icon) => {
  switch (icon) {
    case buttonIcons.ADD:
      return <FontAwesomeIcon icon="plus" />;
    default: 
      return undefined;
  }
};
