import React, { useState } from "react";
import "./AlertBar.scss";

const AlertBar = ({ alertText, mainArrayKey, triggerPosition }) => {
  const [alertVisibility, setAlertVisibility] = useState(true);

  return (
    <div
      className={alertVisibility ? "AlertItem" : "AlertItem--hidden"}
      key={mainArrayKey}
    >
      <span
        key={mainArrayKey}
        className="AlertItem__text globalAlertBackground"
      >
        Alert nr {mainArrayKey}. {alertText}
      </span>
      <span className="AlertItem__space">
        <button
          key={mainArrayKey}
          className="globalDarkButton"
          onClick={() => {
            triggerPosition(mainArrayKey);
          }}
        >
          MOVE
        </button>
      </span>
      <span className="AlertItem__space">
        <button
          key={mainArrayKey}
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
