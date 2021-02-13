import React from "react";
import "./task-styles.scss";

class PureComponent extends React.PureComponent {
  render() {
    return (
      <div className="title__pureComponent">
        <h1>Hello React from React.PureComponent!</h1>
      </div>
    );
  }
}

export default PureComponent;
