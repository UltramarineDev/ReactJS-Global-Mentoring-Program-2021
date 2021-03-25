import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//TODO: update buttonIcons
import { buttonIcons, buttonSizes } from '/src/components/shared/constants';

export const getButtonIcon = (icon) => {
  switch (icon) {
    case buttonIcons.ADD:
      return <FontAwesomeIcon icon="plus" />;
    default: 
      return undefined;
  }
};

export const getButtonSizeStyle = (size, styles) => {
  switch (size) {
    case (buttonSizes.LARGE):
    return styles.largeSize;
    case (buttonSizes.SMALL):
    return styles.smallSize;
    default: 
      return styles.mediumSize;
  }
};
