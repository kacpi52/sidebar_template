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
      if (elem.isBottom) {
        bottomAlerts.push(elem);
      } else {
        topAlerts.push(elem);
      }
    });
  }
  const topAlertsHolder = topAlerts.map((elem, index) => {
    return <AlertBar {...elem} triggerPosition={triggerPosition} key={index} />;
  });
  const bottomAlertsHolder = bottomAlerts.map((elem, index) => {
    return <AlertBar {...elem} triggerPosition={triggerPosition} key={index} />;
  });
  return (
    <>
      <div className="alertContainer">{topAlertsHolder}</div>
      <div className="alertContainer--bottom">{bottomAlertsHolder}</div>
    </>
  );
};
export default AlertBox;
