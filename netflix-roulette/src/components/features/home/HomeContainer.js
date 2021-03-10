import React, { PureComponent } from 'react';

import { data } from './data.json';
import HomeComponent from './Home';
import { getTabs, getFilteredMovies, getSortedMovies, getOptions } from './utils';
import { TABS, SORT_OPTIONS, movieActions, SORT_OPTIONS_LABELS, movieActionLabels } from './constants';

class HomeContainer extends PureComponent {
  state = {
    movies: [],
    filteredMovies: [],
    activeTab: TABS.ALL,
    sortOptionId: SORT_OPTIONS.RELEASE_DATE,
    isAddMovieModalOpened: false,
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

  handleAddMovie = () => this.setState({ isAddMovieModalOpened: true });

  handleCloseAddMovie = () => this.setState({ isAddMovieModalOpened: false });

  handleActionClick = (id) => this.setState({ action: id });

  handleAction = action => this.setState({ action });

  handleActionCancel = () => this.handleAction();

  handleDeleteMovie = () => { this.handleActionCancel() };

  loadPage() {
    const movies = data;
    this.setState({ movies, filteredMovies: movies });
  }

  render() {
    const { activeTab, filteredMovies, sortOptionId, isAddMovieModalOpened, action } = this.state;
    const moviesCount = filteredMovies ? filteredMovies.length : 0;

    return (
      <HomeComponent
        filteredMovies={filteredMovies}
        moviesCount={moviesCount}
        tabs={getTabs()}
        activeTab={activeTab}
        onTabChange={this.handleTabChange}
        sortOptions={getOptions(SORT_OPTIONS, SORT_OPTIONS_LABELS)}
        onSortOptionChange={this.handleSortOptionChange}
        sortOptionId={sortOptionId}
        onAddMovie={this.handleAddMovie}
        isAddMovieModalOpened={isAddMovieModalOpened}
        onCloseAddMovie={this.handleCloseAddMovie}
        onActionClick={this.handleActionClick}
        action={action}
        actions={getOptions(movieActions, movieActionLabels)}
        onActionCancel={this.handleActionCancel}
        isEditOpen={action === movieActions.edit}
        isDeleteOpen={action === movieActions.delete}
        onDeleteMovie={this.handleDeleteMovie}
        onSubmitMovie={()=>{}}
        onSaveEditedMovie={()=>{}}
      />
    );
  }
}

export default HomeContainer;