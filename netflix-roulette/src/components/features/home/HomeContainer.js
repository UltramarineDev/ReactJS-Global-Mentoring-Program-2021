import React, { Component } from 'react';

import { data } from './data.json';
import HomeComponent from './Home';
import { getTabs, getFilteredMovies, getSortOptions, getSortedMovies } from './utils';
import { TABS, FILTER_TAGS, SORT_OPTIONS } from './constants';

class HomeContainer extends Component {
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
    this.setState(({ movies }) => {
      let filteredMovies = movies;

      //TODO: Maybe optimize filtering
      switch (activeTab) {
        case TABS.COMEDY:
         filteredMovies = getFilteredMovies(movies, FILTER_TAGS.COMEDY);
         break;
        case TABS.CRIME:
         filteredMovies = getFilteredMovies(movies, FILTER_TAGS.CRIME);
         break;
        case TABS.DOCUMENTARY:
         filteredMovies = getFilteredMovies(movies, FILTER_TAGS.DOCUMENTARY);
         break;
        case TABS.HORROR:
         filteredMovies = getFilteredMovies(movies, FILTER_TAGS.HORROR);
         break;
        default:
          break;
      }

      return { filteredMovies, activeTab };
    });
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