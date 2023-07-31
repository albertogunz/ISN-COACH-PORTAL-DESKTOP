/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const InputFields = ({
  property1,
  className,
  overlapGroupClassName,
  errorMessageClassName,
  text = "Name",
  boxClassName,
  keyFieldClassName,
  startCursorClassName,
  maskLayerClassName,
  maskLayer = "https://generation-sessions.s3.amazonaws.com/ad56d2d0a67ab2d7d30cd5ea42b89381/img/mask-layer-9@2x.png",
  endCursorClassName,
  endCursor = "https://generation-sessions.s3.amazonaws.com/ad56d2d0a67ab2d7d30cd5ea42b89381/img/start-cursor-9@2x.png",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`input-fields ${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      {(state.property1 === "default" ||
        state.property1 === "variant-2" ||
        state.property1 === "variant-3" ||
        state.property1 === "variant-4" ||
        state.property1 === "variant-5" ||
        state.property1 === "variant-6" ||
        state.property1 === "variant-7") && (
        <div className={`overlap-group ${overlapGroupClassName}`}>
          <div className={`error-message ${errorMessageClassName}`}>{text}</div>
          <div className={`box ${boxClassName}`} />
          <div className={`key-field ${keyFieldClassName}`}>{text}</div>
          <div className="value-main">
            <img
              className={`start-cursor ${startCursorClassName}`}
              alt="Start cursor"
              src={
                state.property1 === "variant-2"
                  ? "https://generation-sessions.s3.amazonaws.com/ad56d2d0a67ab2d7d30cd5ea42b89381/img/start-cursor-8.svg"
                  : "https://generation-sessions.s3.amazonaws.com/ad56d2d0a67ab2d7d30cd5ea42b89381/img/start-cursor-9@2x.png"
              }
            />
            <div className="value-masked">
              <img
                className={`mask-layer ${maskLayerClassName}`}
                alt="Mask layer"
                src={
                  ["default", "variant-2", "variant-3"].includes(state.property1)
                    ? maskLayer
                    : "https://generation-sessions.s3.amazonaws.com/ad56d2d0a67ab2d7d30cd5ea42b89381/img/mask-layer-7@2x.png"
                }
              />
            </div>
            <img
              className={`end-cursor ${endCursorClassName}`}
              alt="End cursor"
              src={
                state.property1 === "variant-4"
                  ? "https://generation-sessions.s3.amazonaws.com/ad56d2d0a67ab2d7d30cd5ea42b89381/img/start-cursor-8.svg"
                  : endCursor
              }
            />
          </div>
        </div>
      )}

      {state.property1 === "variant-8" && (
        <>
          <div className="text-wrapper">{text}</div>
          <div className="div">
            <div className="key-field-2">{text}</div>
            <div className="value-main-2">
              <img
                className="img"
                alt="Start cursor"
                src="https://generation-sessions.s3.amazonaws.com/ad56d2d0a67ab2d7d30cd5ea42b89381/img/start-cursor-9@2x.png"
              />
              <div className="value-masked">
                <img
                  className="mask-layer"
                  alt="Mask layer"
                  src="https://generation-sessions.s3.amazonaws.com/ad56d2d0a67ab2d7d30cd5ea42b89381/img/mask-layer-7@2x.png"
                />
              </div>
              <img
                className="end-cursor-2"
                alt="End cursor"
                src="https://generation-sessions.s3.amazonaws.com/ad56d2d0a67ab2d7d30cd5ea42b89381/img/start-cursor-9@2x.png"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        property1: "variant-2",
      };
  }

  return state;
}

InputFields.propTypes = {
  property1: PropTypes.oneOf([
    "default",
    "variant-5",
    "variant-2",
    "variant-3",
    "variant-4",
    "variant-8",
    "variant-7",
    "variant-6",
  ]),
  text: PropTypes.string,
  maskLayer: PropTypes.string,
  endCursor: PropTypes.string,
};
