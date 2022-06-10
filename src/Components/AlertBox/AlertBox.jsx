import React, { useState } from "react";
import "./AlertBox.scss";
import AlertBar from "./AlertBar";
import "../../Utils/Buttons.scss";
import "../../Utils/FontsBackgrounds.scss";

const AlertBox = ({ alertBoxArray, pushElem }) => {
  const topArr = [];
  const botArr = [];
  let topDown = false;

  const triggerPosition = (ind, bot) => {
    if (bot) {
      const cutedElem = botArr.splice(ind, 1);
      topArr.push(cutedElem);
      pushElem();
    } else {
      const cutedElem = topArr.splice(ind, 1);
      botArr.push(cutedElem);
      pushElem();
    }
  };

  if (alertBoxArray) {
    alertBoxArray.forEach((elem, index) => {
      if (topDown) {
        botArr.push({
          elemAlertText: elem.alertText,
          elemAlertKey: elem.alertKey,
          elemTriggerPosition: triggerPosition,
          elemArrIndex: botArr.length,
          elemBottom: elem.bottom,
          key: index,
        });
        topDown = !topDown;
      } else {
        topArr.push({
          elemAlertText: elem.alertText,
          elemAlertKey: elem.alertKey,
          elemTriggerPosition: triggerPosition,
          elemArrIndex: botArr.length,
          elemBottom: elem.bottom,
          key: index,
        });
        topDown = !topDown;
      }
    });
  }
  const topArrComponents = topArr.map((elem, index) => {
    return (
      <AlertBar
        barText={elem.elemAlertText}
        barKey={elem.elemAlertKey}
        triggerPosition={elem.elemTriggerPosition}
        arrIndex={topArr.length}
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
        arrIndex={botArr.length}
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
