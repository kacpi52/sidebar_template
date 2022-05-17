import React, { useState } from "react";
import "./AlertBox.scss";
import "../../Utils/Buttons.scss";
import "../../Utils/FontsBackgrounds.scss";

const AlertBox = ({ alertText, bottom, alertKey }) => {
  const [alertVisibility, setAlertVisibility] = useState(true),
    [alertLocation, setAlertLocation] = useState(bottom);

  return (
    <div
      className={
        alertLocation
          ? alertVisibility
            ? "BottomAlertItem"
            : "BottomAlertItem--hidden"
          : alertVisibility
          ? "AlertItem"
          : "AlertItem--hidden"
      }
      key={alertKey}
    >
      <span key={alertKey} className="AlertItem__text globalAlertBackground">
        Alert nr {alertKey}. {alertText}
      </span>
      <span className="AlertItem__space">
        <button
          key={alertKey}
          className="globalDarkButton"
          onClick={() => {
            setAlertLocation(!alertLocation);
          }}
        >
          MOVE
        </button>
      </span>
      <span className="AlertItem__space">
        <button
          key={alertKey}
          className="globalDarkButton"
          onClick={() => {
            setAlertVisibility(false);
          }}
        >
          Close
        </button>
      </span>
    </div>
  );
};

export default AlertBox;
