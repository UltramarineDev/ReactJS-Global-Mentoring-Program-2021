import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import MovieCard from './MovieCard';

class MovieCardContainer extends PureComponent {
  static propTypes = {
    movie: PropTypes.object.isRequired,
    onActionClick: PropTypes.func.isRequired,
    actions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  };

   state = {
    showOptions: false,
  }

  handleActionsClick = () => this.setState(({ showOptions }) => { 
    return { showOptions: !showOptions } 
  });

  handleMovieClick = () => {};

  render() {
    const { movie, onActionClick, actions } = this.props;
    const { showOptions } = this.state;

    const genre = movie ? movie.genres.join(", ") : '-';
    const year = movie ? new Date(movie.release_date).getFullYear() : '-';
    return (
      <MovieCard
        movie={movie}
        year={year}
        genre={genre}
        onActionsClick={this.handleActionsClick}
        showOptions={showOptions}
        onActionClick={onActionClick}
        actions={actions}
        onMovieClick={this.handleMovieClick}
      />
    );
  }
};

export default MovieCardContainer;
