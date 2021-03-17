
import React from 'react';
import PropTypes from 'prop-types';

import { buttonIcons, buttonTypes, backgroundImageUrl } from '/src/components/shared/constants';
import Search from '/src/components/shared/search/Search';
import Button from '/src/components/shared/button/Button'
import NetflixRoulette from '/src/components/shared/NetflixRoulette/NetflixRoulette';
import { wordings } from '/src/locales/wordings';

import styles from './Header.module.scss';

const Header = ({ onAddMovie }) => (
  <div className={styles.searchSectionWrapper}>
    <div className={styles.background}>
      <img src={backgroundImageUrl} alt="Background image"/>
      <div className={styles.gradient}></div>
    </div>
   <div className={styles.searchSection}>
     <div className={styles.header}>
       <NetflixRoulette/>
       <Button 
         type={buttonTypes.ADD} 
         iconType={buttonIcons.ADD}
         label={wordings.add_movie}
         onClick={onAddMovie}/>
     </div>
     <div className={styles.searchDescription}>{wordings.find_your_movie}</div>
     <Search />
   </div>
  </div>
);

Header.propTypes = {
  onAddMovie: PropTypes.func.isRequired,
};

export default Header;