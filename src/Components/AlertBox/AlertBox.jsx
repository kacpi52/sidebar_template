import React, { useState } from "react";
import "./AlertBox.scss";
import AlertBar from "./AlertBar";
import "../../Utils/Buttons.scss";
import "../../Utils/FontsBackgrounds.scss";

const AlertBox = ({ alertBoxArray, pushElem }) => {
  const topArr = [];
  const botArr = [];

  const triggerPosition = (ind, bot) => {
    if (bot) {
      const cutedElem = botArr.splice(ind, 1);
      pushElem(cutedElem[0]);
    } else {
      const cutedElem = topArr.splice(ind, 1);
      pushElem(cutedElem[0]);
    }
  };

  if (alertBoxArray) {
    alertBoxArray.forEach((elem, index) => {
      if (elem.bottom) {
        botArr.push({
          elemAlertText: elem.alertText,
          elemAlertKey: elem.alertKey,
          elemTriggerPosition: triggerPosition,
          elemBottom: elem.bottom,
          key: index,
        });
      } else {
        topArr.push({
          elemAlertText: elem.alertText,
          elemAlertKey: elem.alertKey,
          elemTriggerPosition: triggerPosition,
          elemBottom: elem.bottom,
          key: index,
        });
      }
    });
  }
  const topArrComponents = topArr.map((elem, index) => {
    return (
      <AlertBar
        barText={elem.elemAlertText}
        barKey={elem.elemAlertKey}
        triggerPosition={elem.elemTriggerPosition}
        arrIndex={index}
        bottom={elem.elemBottom}
        key={index}
      />
    );
  });
  const botArrComponents = botArr.map((elem, index) => {
    return (
      <AlertBar
        barText={elem.elemAlertText}
        barKey={elem.elemAlertKey}
        triggerPosition={elem.elemTriggerPosition}
        arrIndex={index}
        bottom={elem.elemBottom}
        key={index}
      />
    );
  });
  return (
    <>
      <div className="alertContainer">{topArrComponents}</div>
      <div className="alertContainer--bottom">{botArrComponents}</div>
    </>
  );
};
export default AlertBox;
