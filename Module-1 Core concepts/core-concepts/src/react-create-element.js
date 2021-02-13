import React from "react";
import "./task-styles.scss";

const ReactCreateElement = () =>
  React.createElement(
    "h1",
    { className: "title__createElement" },
    "Hello React from createElement!"
  );

export default ReactCreateElement;
