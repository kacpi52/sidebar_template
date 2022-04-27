import React, { useState } from "react";
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
    [alertContent, setAlertContent] = useState();

  const inputHandler = (text) => {
    setUserNumber(parseInt(text.target.value));
  };
  const saveUserNumber = (event) => {
    let resVal = false;
    var checkVal = false;
    let evenCheck = false;

    if (ranArr[0] % 2 === 0) evenCheck = true;
    setTriesCounter(triesCounter + 1);
    if (isNaN(userNumber)) {
      setErrorHandler("Podaj cyfre");
    } else {
      event.preventDefault();
      setErrorHandler(false);
      ranArr.forEach((elem, index) =>
        checkArray(elem, index, userNumber, resVal, checkVal, evenCheck)
      );
      console.log(`po funkcji wynik powtorki to ${checkVal}`);
      setAlertContent(`po funkcji wynik powtorki to ${checkVal}`);
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
        console.log(` powinno dac powtorke i wynik ${checkVal}`);
        setAlertContent(` powtorka i wynik zmiennej pomocniczej ${checkVal}`);
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
    setAlertContent(`alert od zresetowania`);
  };
  return (
    <>
      <AlertBox alertContent={alertContent} />
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
