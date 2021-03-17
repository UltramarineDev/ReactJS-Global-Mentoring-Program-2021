
import React from 'react';
import PropTypes from 'prop-types';

import { BUTTON_ICONS, BUTTON_TYPES, backgroundImageUrl } from '/src/components/shared/constants';
import Search from '/src/components/shared/search';
import Button from '/src/components/shared/button'
import NetflixRoulette from '/src/components/shared/netflix-roulette';
import styles from './Header.module.scss';

const HeaderComponent = ({ onAddMovie }) => (
  <div className={styles.searchSectionWrapper}>
    <div className={styles.background}>
      <img src={backgroundImageUrl} alt="Background image"/>
      <div className={styles.gradient}></div>
    </div>
   <div className={styles.searchSection}>
     <div className={styles.header}>
       <NetflixRoulette/>
       <Button 
         type={BUTTON_TYPES.ADD} 
         iconType={BUTTON_ICONS.ADD}
         label='ADD MOVIE'
         onClick={onAddMovie}/>
     </div>
     <div className={styles.searchDescription}>find your movie</div>
     <Search />
   </div>
  </div>
);

HeaderComponent.propTypes = {
  onAddMovie: PropTypes.func.isRequired,
};

export default HeaderComponent;