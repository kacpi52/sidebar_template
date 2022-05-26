import React, { useState } from "react";
import "./AlertBox.scss";
import AlertBar from "./AlertBar";
import "../../Utils/Buttons.scss";
import "../../Utils/FontsBackgrounds.scss";

const AlertBox = ({ alertBoxArray }) => {
  const topArr = [];
  const botArr = [];
  if (alertBoxArray) {
    alertBoxArray.forEach((elem) => {
      if (elem.bottom) {
        botArr.push(
          <AlertBar barText={elem.alertText} barKey={elem.alertKey} />
        );
      } else {
        topArr.push(
          <AlertBar barText={elem.alertText} barKey={elem.alertKey} />
        );
      }
    });
  }
  return (
    <>
      <div className="alertContainer">{topArr}</div>
      <div className="alertContainer--bottom">{botArr}</div>
    </>
  );
};
export default AlertBox;
