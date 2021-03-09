import React from 'react';
import PropTypes from 'prop-types';

import Header from '/src/components/shared/header';
import MovieList from '/src/components/shared/movies-list/MoviesList';
import TabBar from '/src/components/shared/tab-bar';
import Dropdown from '/src/components/shared/Dropdown';
import styles from './Home.module.scss';

const HomeComponent = ({ 
  filteredMovies,
  moviesCount,
  tabs,
  activeTab,
  onTabChange,
  sortOptions,
  onSortOptionChange,
  sortOptionId,
  }) => (
  <>
    <Header />
    <div className={styles.movieListSection}>
      <div className={styles.navBar}>
        <div className={styles.resultsFilter}>
        <TabBar
          tabs={tabs}
          activeTabId={activeTab}
          onTabChange={onTabChange}
        />
      </div>
      <div className={styles.resultsSort}>
        <span>SORT BY</span>
        <Dropdown
          options={sortOptions}
          value={sortOptionId}
          onChange={onSortOptionChange} />
      </div>
      </div>
 
      <div className={styles.border}></div>
      <div className={styles.moviesCount}><strong>{moviesCount}</strong> movies found</div>
      {filteredMovies &&  
        <div className={styles.movieList}>
          <MovieList movies={filteredMovies}/>
        </div>
      }
    </div>
  </>
);

HomeComponent.propTypes = {
  filteredMovies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  moviesCount: PropTypes.number.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
  sortOptions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onSortOptionChange: PropTypes.func.isRequired,
  sortOptionId: PropTypes.string.isRequired,
};

export default HomeComponent;
