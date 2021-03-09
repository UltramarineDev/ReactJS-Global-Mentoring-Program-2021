import React, { PureComponent } from 'react';

import { data } from './data.json';
import HomeComponent from './Home';
import { getTabs, getFilteredMovies, getSortOptions, getSortedMovies } from './utils';
import { TABS, FILTER_TAGS, SORT_OPTIONS } from './constants';

class HomeContainer extends PureComponent {
  state = {
    movies: [],
    filteredMovies: [],
    activeTab: TABS.ALL,
    sortOptionId: SORT_OPTIONS.RELEASE_DATE,
  }

  componentDidMount() {
    this.loadPage();
  }

  handleTabChange = (activeTab) => {
    const { movies } = this.state;
    const filteredMovies = getFilteredMovies(movies, activeTab);
    this.setState({ filteredMovies, activeTab });
  }

  handleSortOptionChange = (value) => {
    this.setState(({ filteredMovies }) => {
      const sortedMovies = getSortedMovies(filteredMovies, value);
      return { filteredMovies: sortedMovies, sortOptionId: value };
    });
  }

  loadPage() {
    const movies = data;
    this.setState({ movies, filteredMovies: movies });
  }

  render() {
    const { activeTab, filteredMovies, sortOptionId } = this.state;
    const moviesCount = filteredMovies ? filteredMovies.length : 0;

    return (
      <HomeComponent
        filteredMovies={filteredMovies}
        moviesCount={moviesCount}
        tabs={getTabs()}
        activeTab={activeTab}
        onTabChange={this.handleTabChange}
        sortOptions={getSortOptions()}
        onSortOptionChange={this.handleSortOptionChange}
        sortOptionId={sortOptionId}
      />
    );
  }
}

export default HomeContainer;