import React from "react";
import { Button } from "../../components/Button";
import { EyeShow } from "../../components/EyeShow";
import { InputFields } from "../../components/InputFields";
import { Square } from "../../components/Square";
import { SquareCheckbox } from "../../components/SquareCheckbox";
import "./style.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="div-2">
        <div className="overlap">
          <p className="p">
            Welcome to the Coaches Portal We are excited to have you join the ISNation family of Certified Coaches.
            Please Login and complete the simple onboarding process to get started.
          </p>
          <div className="text-wrapper-2">Tracey Currey, CEO</div>
          <div className="rectangle" />
          <div className="LEFT-COLUMN">
            <img
              className="layer"
              alt="Layer"
              src="https://generation-sessions.s3.amazonaws.com/ad56d2d0a67ab2d7d30cd5ea42b89381/img/layer-1@2x.png"
            />
            <p className="text-wrapper-3">
              Welcome to the Coaches Portal We are excited to have you join the ISNation family of Certified Coaches.
              Please Login and complete the simple onboarding process to get started.
            </p>
            <div className="text-wrapper-4">Tracey Currey, CEO</div>
          </div>
        </div>
        <div className="LOGIN-BOX">
          <div className="HEADLINE">
            <h1 className="h-1">Coach’s Portal Login</h1>
            <p className="text-wrapper-5">Please enter your username and password.</p>
          </div>
          <img
            className="div-line"
            alt="Div line"
            src="https://generation-sessions.s3.amazonaws.com/ad56d2d0a67ab2d7d30cd5ea42b89381/img/div-line.svg"
          />
          <InputFields
            boxClassName="input-fields-2"
            className="emiail-input"
            endCursorClassName="emiail-input-4"
            errorMessageClassName="design-component-instance-node"
            keyFieldClassName="input-fields-3"
            maskLayer="https://generation-sessions.s3.amazonaws.com/ad56d2d0a67ab2d7d30cd5ea42b89381/img/mask-layer-1@2x.png"
            maskLayerClassName="emiail-input-3"
            overlapGroupClassName="input-fields-instance"
            property1="default"
            startCursorClassName="emiail-input-2"
            text="Email or Username"
          />
          <div className="emiail-input">
            <div className="overlap-2">
              <InputFields
                boxClassName="input-fields-2"
                className="input-fields-4"
                endCursor="https://generation-sessions.s3.amazonaws.com/ad56d2d0a67ab2d7d30cd5ea42b89381/img/end-cursor@2x.png"
                endCursorClassName="input-fields-7"
                errorMessageClassName="design-component-instance-node"
                keyFieldClassName="input-fields-3"
                maskLayer="https://generation-sessions.s3.amazonaws.com/ad56d2d0a67ab2d7d30cd5ea42b89381/img/mask-layer@2x.png"
                maskLayerClassName="input-fields-6"
                overlapGroupClassName="input-fields-instance"
                property1="default"
                startCursorClassName="input-fields-5"
                text="Password"
              />
              <EyeShow
                className="eye-show-instance"
                eyeShow="https://generation-sessions.s3.amazonaws.com/ad56d2d0a67ab2d7d30cd5ea42b89381/img/eye--show.svg"
              />
            </div>
          </div>
          <div className="terms">
            <Square
              className="square-instance"
              square="https://generation-sessions.s3.amazonaws.com/ad56d2d0a67ab2d7d30cd5ea42b89381/img/square.svg"
            />
            <p className="text-wrapper-6">I agree to terms and conditions</p>
          </div>
          <Button
            className="button-instance"
            darkMode
            icon={false}
            labelClassName="button-2"
            text="Sign In"
            type="filled"
          />
          <div className="BOTTOM-STUFF">
            <div className="text-wrapper-7">Forgot Password</div>
            <div className="remeber-me">
              <SquareCheckbox
                className="square-checkbox-solid"
                squareCheckbox="https://generation-sessions.s3.amazonaws.com/ad56d2d0a67ab2d7d30cd5ea42b89381/img/square-checkbox-solid-1.svg"
              />
              <div className="text-wrapper-8">Remember me</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
