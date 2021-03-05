import PropTypes from 'prop-types';
import React, { Component } from 'react';

import MovieCardComponent from './MovieCard';

class MovieCardContainer extends Component {
  static propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    releaseDate: PropTypes.string.isRequired,
  };

  render() {
    const { imageUrl, name, genres, releaseDate } = this.props;

    const genre = genres.join(", ");
    const year = new Date(releaseDate).getFullYear();
    return (
      <MovieCardComponent
        imageUrl={imageUrl}
        name={name}
        year={year}
        genre={genre}
      />
    );
  }
};

export default MovieCardContainer;
