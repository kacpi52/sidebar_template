import React, { useState } from "react";
import Menu from "../Components/SidebarMenu/Menu";
import { Container, Row, Col } from "react-bootstrap";

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
    [triesCounter, setTriesCounter] = useState(0);

  const inputHandler = (text) => {
    setUserNumber(parseInt(text.target.value));
  };
  const saveUserNumber = (event) => {
    let resVal = false;
    let checkVal = false;
    setTriesCounter(triesCounter + 1);
    if (isNaN(userNumber)) {
      setErrorHandler("Podaj cyfre");
    } else {
      event.preventDefault();
      setErrorHandler(false);
      ranArr.push(...evenFilter(ranArr));
      ranArr.forEach((elem, index) => {
        if (
          elem === userNumber &&
          index > numbersQuantity &&
          index < ranArr.length
        ) {
          resVal = true;
        } else if (elem === userNumber && index > ranArr.length) {
          checkVal = true;
        }
      });
      setRepeatError(checkVal);
      if (
        triesCounter < triesLimit &&
        resultHandler !== true &&
        checkVal !== true
      ) {
        setResultHandler(resVal);
        ranArr.push(userNumber);
      }
    }
  };
  const evenFilter = (array) => {
    if (array[0] % 2 === 0) {
      return array.filter((value) => {
        return value % 2 === 0;
      });
    } else {
      return array.filter((value) => {
        return value % 2 !== 0;
      });
    }
  };

  const resetAll = () => {
    setResultHandler(false);
    setTriesCounter(0);
  };
  return (
    <>
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
