
import React from 'react';

import { BUTTON_ICONS, BUTTON_TYPES } from '/src/components/shared/constants';
import Search from '/src/components/shared/search';
import Button from '/src/components/shared/button'
import NetflixRoulette from '/src/components/shared/netflix-roulette';
import styles from './Header.module.scss';

const HeaderComponent = () => (
  <div className={styles.searchSectionWrapper}>
   <div className={styles.searchSection}>
     <div className={styles.header}>
       <NetflixRoulette/>
       <Button type={BUTTON_TYPES.ADD} iconType={BUTTON_ICONS.ADD} label='ADD MOVIE'/>
     </div>
     <div className={styles.searchDescription}>find your movie</div>
     <Search />
   </div>
  </div>
);

export default HeaderComponent;