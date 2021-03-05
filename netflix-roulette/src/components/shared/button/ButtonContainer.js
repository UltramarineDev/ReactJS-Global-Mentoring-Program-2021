import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { BUTTON_TYPES } from '/src/components/shared/constants';
import ButtonComponent from './Button';
import { getButtonIcon } from './utils';

class ButtonContainer extends Component {
  static propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    iconType: PropTypes.string,
  };

  static defaultProps = {
    label: 'Submit',
    type: BUTTON_TYPES.ADD,
    iconType: undefined,
  }

  render() {
    const { label, type, iconType } = this.props;

    const icon = iconType ? getButtonIcon(iconType) : undefined;
    return (
      <ButtonComponent
        label={label}
        type={type}
        icon={icon}
      />
    );
  }
};

export default ButtonContainer;
