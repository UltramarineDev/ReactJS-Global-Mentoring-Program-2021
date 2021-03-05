import PropTypes from 'prop-types';
import React, { Component } from 'react';

import DropdownComponent from './Dropdown';

class DropdownContainer extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })),
    onChange: PropTypes.func.isRequired,
  };

  state = {
    showOptions: false,
  }

  handleDropDownClick = () => this.setState(({ showOptions }) => { 
    return { showOptions: !showOptions } 
  });

  handleChangeClicked = (value) => {
    this.handleDropDownClick();
    this.props.onChange(value);
  }

  render() {
    const { value, options } = this.props;
    const { showOptions } = this.state;

    const currentValueLabel = options.find(({ id }) => id === value).name;
    return (
      <DropdownComponent
        value={value}
        options={options}
        onChange={this.handleChangeClicked}
        onDropDownClick={this.handleDropDownClick}
        showOptions={showOptions}
        currentValueLabel={currentValueLabel}
      />
    );
  }
};

export default DropdownContainer;