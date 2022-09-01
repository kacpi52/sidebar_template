import React, { useState } from "react";
import "./AlertBox.scss";
import AlertBar from "./AlertBar";
import "../../Utils/Buttons.scss";
import "../../Utils/FontsBackgrounds.scss";

const AlertBox = ({ alertBoxArray, switchAlertPosition }) => {
  const topAlerts = [];
  const bottomAlerts = [];

  const triggerPosition = (mainIndex) => {
    switchAlertPosition(mainIndex);
  };

  if (alertBoxArray) {
    alertBoxArray.forEach((elem) => {
      if (elem.isLocationBottom) {
        bottomAlerts.push(elem);
      } else {
        topAlerts.push(elem);
      }
    });
  }
  const alertsHolder = (array) => {
    return array.map((elem) => {
      return (
        <AlertBar
          {...elem}
          triggerPosition={triggerPosition}
          key={elem.mainArrayKey}
        />
      );
    });
  };

  return (
    <>
      <div className="alertContainer">{alertsHolder(topAlerts)}</div>
      <div className="alertContainer--bottom">{alertsHolder(bottomAlerts)}</div>
    </>
  );
};
export default AlertBox;
