import React, { useState } from "react";
import "./AlertBox.scss";
import "../../Utils/Buttons.scss";
import "../../Utils/FontsBackgrounds.scss";

const AlertBox = ({ alertText, bottom, alertKey }) => {
  const [alertVisibility, setAlertVisibility] = useState(true),
    [alertLocation, setAlertLocation] = useState(bottom);

  if (bottom) {
    return (
      // tu jest poki co na sztywno
      <div className="bottomContainer">
        <AlertBar barText={alertText} barKey={alertKey} />
        <AlertBar barText={alertText} barKey={alertKey} />
      </div>
    );
  } else {
    return <AlertBar barText={alertText} barKey={alertKey} />;
  }
};

export default AlertBox;

const AlertBar = ({ barText, barKey }) => {
  const [alertVisibility, setAlertVisibility] = useState(true);

  return (
    <div
      className={alertVisibility ? "AlertItem" : "AlertItem--hidden"}
      key={barKey}
    >
      <span key={barKey} className="AlertItem__text globalAlertBackground">
        Alert nr {barKey}. {barText}
      </span>
      <span className="AlertItem__space">
        <button key={barKey} className="globalDarkButton" onClick={() => {}}>
          MOVE
        </button>
      </span>
      <span className="AlertItem__space">
        <button
          key={barKey}
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
