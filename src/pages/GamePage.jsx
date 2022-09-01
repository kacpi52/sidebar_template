import React, { useState, useEffect } from "react";
import Menu from "../Components/SidebarMenu/Menu";
import { Container, Row, Col } from "react-bootstrap";
import AlertBox from "../Components/AlertBox/AlertBox";
import "../Utils/Buttons.scss";

const numbersQuantity = 20;
const numbersRange = 20;
const ranArr = Array.from({ length: numbersQuantity }, () =>
  Math.floor(Math.random() * numbersRange)
);
const triesLimit = 5;

const GamePage = () => {
  const [userNumber, setUserNumber] = useState(false),
    [errorHandler, setErrorHandler] = useState(false),
    [resultHandler, setResultHandler] = useState(false),
    [repeatError, setRepeatError] = useState(false),
    [triesCounter, setTriesCounter] = useState(0),
    [allAlertContent, setAllAlertContent] = useState([]);
  const addAlert = (arr, textContent, isBottom) => {
    return [
      ...arr,
      {
        text: textContent,
        isLocationBottom: isBottom,
      },
    ];
  };
  const inputHandler = (text) => {
    setUserNumber(parseInt(text.target.value));
  };
  const saveUserNumber = (event) => {
    let resVal = false;
    var checkVal = false;
    let evenCheck = false;

    if (ranArr[0] % 2 === 0) evenCheck = true;
    setTriesCounter(triesCounter + 1);
    setAllAlertContent(
      addAlert(
        allAlertContent,
        `Zostaly ci jeszcze ${triesLimit - triesCounter} próby`,
        false
      )
    );
    if (isNaN(userNumber)) {
      setErrorHandler("Podaj cyfre");
      setAllAlertContent(addAlert(allAlertContent, "Nie podales cyfry", true));
    } else {
      event.preventDefault();
      setErrorHandler(false);
      ranArr.forEach((elem, index) =>
        checkArray(elem, index, userNumber, resVal, checkVal, evenCheck)
      );
      setRepeatError(checkVal);
      if (triesCounter < triesLimit && !resultHandler && !checkVal) {
        setResultHandler(resVal);
        ranArr.push(userNumber);
      }
    }
  };
  const checkArray = (elem, index, number, resVal, checkVal, evenCheck) => {
    if (elem === number) {
      if (evenCheck) {
        if (elem % 2 === 0) resVal = true;
      } else {
        if (elem % 2 !== 0) resVal = true;
      }
      if (index >= numbersQuantity) {
        checkVal = true;
        setAllAlertContent(
          addAlert(
            allAlertContent,
            `powinno dac powtorke i wynik ${checkVal} `,
            false
          )
        );
      }
    } else {
      if (index >= numbersQuantity) {
        checkVal = false;
      }
    }
  };
  const resetAll = () => {
    setResultHandler(false);
    setTriesCounter(0);
    setAllAlertContent(addAlert(allAlertContent, "Zresetowano dane", true));
  };

  const alertBoxArray = allAlertContent.map((elem, index) => {
    return {
      alertText: elem.text,
      mainArrayKey: index,
      isLocationBottom: elem.isLocationBottom,
    };
  });

  const switchAlertPositionSpl = (mainIndex) => {
    const switchSelectedItem = (arr) => {
      return {
        ...arr[mainIndex],
        isLocationBottom: !arr[mainIndex].isLocationBottom,
      };
    };
    allAlertContent.splice(mainIndex, 1, switchSelectedItem(allAlertContent));
    setAllAlertContent(allAlertContent); // tu mam problem co przypisac do seta skoro splice modyfikuje tab
  };
  const switchAlertPositionForEach = (mainIndex) => {
    const switchedAlerts = [];
    allAlertContent.forEach((elem, index) => {
      if (index === mainIndex) {
        switchedAlerts.push({
          ...elem,
          isLocationBottom: !elem.isLocationBottom,
        });
      } else {
        switchedAlerts.push(elem);
      }
    });
    setAllAlertContent(switchedAlerts);
  };
  const switchAlertPosition = (mainIndex) => {
    setAllAlertContent(
      allAlertContent.map((elem, index) => {
        if (index === mainIndex) {
          return { ...elem, isLocationBottom: !elem.isLocationBottom };
        } else {
          return elem;
        }
      })
    );
  };

  useEffect(() => {
    setAllAlertContent(
      addAlert(allAlertContent, `Bazowy komunikat od wyswietlenia strony`, true)
    );
  }, []);

  return (
    <>
      <AlertBox
        alertBoxArray={alertBoxArray}
        switchAlertPosition={switchAlertPosition}
      />
      <Menu />
      <Container>
        <Row>
          <Col>
            <p>Game of Numbers</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <input type="text" onChange={inputHandler} />
            <button type="submit" onClick={saveUserNumber}>
              PLAY
            </button>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Twoja liczba to {userNumber}</p>
            {errorHandler}
            <p>Wynik gry: {resultHandler ? "Trafiles" : "Graj dalej"}</p>
            <p> {resultHandler && "Zresetuj aby zagrać na nowo"}</p>
            <p>
              {triesCounter < triesLimit
                ? `Zostaly ci jeszcze ${triesLimit - triesCounter} próby`
                : `Wykorzystałeś limit prób`}
            </p>
            <p>{repeatError && "Wybrales ta sama liczbę dwa razy z rzędu "}</p>
          </Col>
          <Col>
            <button type="submit" onClick={resetAll}>
              RESTART
            </button>
            <p>Dlugosc tablicy to {ranArr.length}</p>
            <p>{ranArr.join(" , ")}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GamePage;
