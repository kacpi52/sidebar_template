import React from "react";
import "./AlertBox.scss";

const AlertBox = () => {
  return (
    <div className="AlertItem">
      <span className="AlertItem__text">Text alertu</span>
      <span className="AlertItem__button">X</span>
    </div>
  );
};

export default AlertBox;
