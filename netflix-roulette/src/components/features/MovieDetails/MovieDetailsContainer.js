import React, { PureComponent } from 'react';

import { data } from '../../shared/MoviesList/data.json';
import MovieDetails from './MovieDetails';

class MovieDetailsContainer extends PureComponent {
   state = {
    movie: data[3],
  }

  handleClick = () => {};

  render() {
    const { movie } = this.state;

    const year = movie ? new Date(movie.release_date).getFullYear() : '-';
    return (
      <MovieDetails
        movie={movie}
        year={year}
        onClick={this.handleClick}
      />
    );
  }
};

export default MovieDetailsContainer;
