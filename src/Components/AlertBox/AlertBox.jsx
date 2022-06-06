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
        botArr.push(
          <AlertBar
            barText={elem.alertText}
            barKey={elem.alertKey}
            triggerPosition={triggerPosition}
            arrIndex={botArr.length}
            bottom={elem.bottom}
            key={index}
          />
        );
        topDown = !topDown;
      } else {
        topArr.push(
          <AlertBar
            barText={elem.alertText}
            barKey={elem.alertKey}
            triggerPosition={triggerPosition}
            arrIndex={topArr.length}
            bottom={elem.bottom}
            key={index}
          />
        );
        topDown = !topDown;
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
