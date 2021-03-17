import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import MovieImage from './MovieImage';

class MovieImageContainer extends PureComponent {
  static propTypes = {
    imageUrl: PropTypes.string.isRequired,
  };

   state = {
    hasImageError: false,
  }

  handleImageError = () => this.setState({ hasImageError: true });

  render() {
    const { imageUrl } = this.props;
    const { hasImageError } = this.state;

    return (
      <MovieImage
        onImageError={this.handleImageError}
        hasImageError={hasImageError}
        imageUrl={imageUrl}
      />
    );
  }
};

export default MovieImageContainer;
