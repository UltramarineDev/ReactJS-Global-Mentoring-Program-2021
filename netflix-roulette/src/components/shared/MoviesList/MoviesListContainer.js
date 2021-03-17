import React, { PureComponent } from 'react';

import { data } from './data.json';
import MoviesList from './MoviesList';
import { getTabs, getFilteredMovies, getSortedMovies, getOptions } from './utils';
import { tabs, sortOptions, movieActions, sortOptionsLabels, movieActionLabels } from './constants';

class MoviesListContainer extends PureComponent {
  state = {
    movies: [],
    filteredMovies: [],
    activeTab: tabs.ALL,
    sortOptionId: sortOptions.RELEASE_DATE,
    action: '',
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

  handleActionClick = (id) => this.setState({ action: id });

  handleAction = action => this.setState({ action });

  handleActionCancel = () => this.handleAction();

  handleDeleteMovie = () => { this.handleActionCancel() };

  loadPage() {
    const movies = data;
    this.setState({ movies, filteredMovies: movies });
  }

  render() {
    const { activeTab, filteredMovies, sortOptionId, action } = this.state;
    const moviesCount = filteredMovies ? filteredMovies.length : 0;

    return (
      <MoviesList
        filteredMovies={filteredMovies}
        moviesCount={moviesCount}
        tabs={getTabs()}
        activeTab={activeTab}
        onTabChange={this.handleTabChange}
        sortOptions={getOptions(sortOptions, sortOptionsLabels)}
        onSortOptionChange={this.handleSortOptionChange}
        sortOptionId={sortOptionId}
        onActionClick={this.handleActionClick}
        action={action}
        actions={getOptions(movieActions, movieActionLabels)}
        onActionCancel={this.handleActionCancel}
        isEditOpen={action === movieActions.edit}
        isDeleteOpen={action === movieActions.delete}
        onDeleteMovie={this.handleDeleteMovie}
        onSaveEditedMovie={()=>{}}
      />
    );
  }
}

export default MoviesListContainer;