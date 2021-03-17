import React, { PureComponent } from 'react';

import Home from './Home';
class HomeContainer extends PureComponent {
  state = {
    isAddMovieModalOpened: false,
  }

  handleAddMovie = () => this.setState({ isAddMovieModalOpened: true });

  handleCloseAddMovie = () => this.setState({ isAddMovieModalOpened: false });

  render() {
    const { isAddMovieModalOpened } = this.state;

    return (
      <Home
        onAddMovie={this.handleAddMovie}
        isAddMovieModalOpened={isAddMovieModalOpened}
        onCloseAddMovie={this.handleCloseAddMovie}
        onSubmitMovie={()=>{}}
      />
    );
  }
}

export default HomeContainer;