import React, { useState, useEffect } from "react";
import "./AlertBox.scss";
import "../../Utils/Buttons.scss";
import "../../Utils/FontsBackgrounds.scss";

const AlertBox = ({ alertContent }) => {
  const [hideAllAlert, setHideAllAlert] = useState(),
    [textAlert, setTextAlert] = useState([]);
  useEffect(() => {
    if (alertContent) {
      setHideAllAlert(true);
      setTextAlert(
        alertContent.map((elem, index) => (
          <div
            className={hideAllAlert ? "AlertItem" : "AlertItem--hidden"}
            key={index}
          >
            <span key={index} className="AlertItem__text globalAlertBackground">
              Alert nr {index}. {elem}
            </span>
            <span className="AlertItem__space">
              <button
                key={index}
                className="globalDarkButton"
                onClick={() => {
                  setTextAlert(textAlert.splice(index, 1));
                }}
              >
                Close
              </button>
            </span>
          </div>
        ))
      );
    } else {
      setHideAllAlert(false);
    }
  }, [alertContent]);

  return <>{textAlert} </>;
};

export default AlertBox;
