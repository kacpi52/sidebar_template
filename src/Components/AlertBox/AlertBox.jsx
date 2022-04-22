import React from "react";
import "./AlertBox.scss";
import { darkButtonStyling, alertBackground } from "../../Utils/index";

const AlertBox = () => {
  return (
    <div className="AlertItem">
      <span className="AlertItem__text" style={alertBackground}>
        Text alertu
      </span>
      <span className="AlertItem__space">
        <button className="AlertItem__space__button" style={darkButtonStyling}>
          Close
        </button>
      </span>
    </div>
  );
};

export default AlertBox;
