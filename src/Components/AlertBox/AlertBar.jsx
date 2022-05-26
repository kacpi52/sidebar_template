import React, { useState } from "react";
import "./AlertBar.scss";

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

export default AlertBar;
