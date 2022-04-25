import React, { useState, useEffect } from "react";
import "./AlertBox.scss";
import "../../Utils/Buttons.scss";
import "../../Utils/FontsBackgrounds.scss";

const AlertBox = ({ alertContent }) => {
  const [textAlert, setTextAlert] = useState();
  useEffect(() => {
    if (!alertContent) {
      setTextAlert(false);
    } else {
      setTextAlert(alertContent);
    }
  }, [alertContent]);

  return (
    <div className={textAlert ? "AlertItem" : "AlertItem--hidden"}>
      <span className="AlertItem__text globalAlertBackground">{textAlert}</span>
      <span className="AlertItem__space">
        <button
          className="globalDarkButton"
          onClick={() => setTextAlert(false)}
        >
          Close
        </button>
      </span>
    </div>
  );
};

export default AlertBox;
