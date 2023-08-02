/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SquareCheckbox = ({
  className,
  squareCheckbox = "https://generation-sessions.s3.amazonaws.com/ad56d2d0a67ab2d7d30cd5ea42b89381/img/square-checkbox-solid.svg",
}) => {
  return <img className={`square-checkbox ${className}`} alt="Square checkbox" src={squareCheckbox} />;
};

SquareCheckbox.propTypes = {
  squareCheckbox: PropTypes.string,
};
