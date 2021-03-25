
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

import { backgroundImageUrl } from '/src/components/shared/constants';

import styles from './StoryCard.module.scss';

const StoryCard = ({ children, gradientClassName }) => (
  <div className={styles.storyCard}>
    <div className={styles.background}>
      <img src={backgroundImageUrl} alt="Background image"/>
      <div className={classNames(styles.gradient, gradientClassName)}></div>
    </div>
    {children}
  </div>
);

StoryCard.propTypes = {
  children: PropTypes.node,
  gradientClassName: PropTypes.string,
}

StoryCard.defaultProps = {
  children: undefined,
  gradientClassName: '',
}

export default StoryCard;