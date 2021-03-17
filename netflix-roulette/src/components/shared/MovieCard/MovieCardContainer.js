import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import MovieCard from './MovieCard';

class MovieCardContainer extends PureComponent {
  static propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    releaseDate: PropTypes.string.isRequired,
    onActionClick: PropTypes.func.isRequired,
    actions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  };

   state = {
    showOptions: false,
    hasImageError: false,
  }

  handleActionsClick = () => this.setState(({ showOptions }) => { 
    return { showOptions: !showOptions } 
  });

  handleImageError = () => this.setState({ hasImageError: true });

  render() {
    const { imageUrl, name, genres, releaseDate, onActionClick, actions } = this.props;
    const { showOptions, hasImageError } = this.state;

    const genre = genres.join(", ");
    const year = new Date(releaseDate).getFullYear();
    return (
      <MovieCard
        imageUrl={imageUrl}
        name={name}
        year={year}
        genre={genre}
        onActionsClick={this.handleActionsClick}
        showOptions={showOptions}
        onActionClick={onActionClick}
        actions={actions}
        onImageError={this.handleImageError}
        hasImageError={hasImageError}
      />
    );
  }
};

export default MovieCardContainer;
