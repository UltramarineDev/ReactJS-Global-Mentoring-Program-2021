import { buttonSizes } from 'components/shared/constants';

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
