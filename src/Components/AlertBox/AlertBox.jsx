import React, { useState, useEffect } from "react";
import "./AlertBox.scss";
import "../../Utils/Buttons.scss";
import "../../Utils/FontsBackgrounds.scss";

const AlertBox = ({ alertContent }) => {
  const [hideAlert, setHideAlert] = useState(),
    [textAlert, setTextAlert] = useState([]);
  useEffect(() => {
    if (!alertContent) {
      setHideAlert(false);
    } else {
      setHideAlert(true);
      setTextAlert((arr) => [...arr, alertContent]);
    }
  }, [alertContent]);

  return (
    <div className={hideAlert ? "AlertItem" : "AlertItem--hidden"}>
      <span className="AlertItem__text globalAlertBackground">
        {textAlert.map((elem, index) => (
          <div key={index}>
            Alert nr {index}. {elem}
          </div>
        ))}
      </span>
      <span className="AlertItem__space">
        <button
          className="globalDarkButton"
          onClick={() => {
            setHideAlert(false);
            setTextAlert([]);
          }}
        >
          Close
        </button>
      </span>
    </div>
  );
};

export default AlertBox;
