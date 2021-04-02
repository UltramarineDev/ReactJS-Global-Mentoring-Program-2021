import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { wordings } from 'locales/wordings';

import styles from './ErrorBoundary.module.scss';

class ErrorBoundaryContainer extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1 className={styles.center}>{wordings.something_went_wrong}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundaryContainer;
