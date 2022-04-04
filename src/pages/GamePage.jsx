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
  let resVal = false;
  let checkVal = false;
  let evenCheck = false;
  const inputHandler = (text) => {
    setUserNumber(parseInt(text.target.value));
  };
  const saveUserNumber = (event) => {
    if (ranArr[0] % 2 === 0) {
      evenCheck = true;
    }
    setTriesCounter(triesCounter + 1);
    if (isNaN(userNumber)) {
      setErrorHandler("Podaj cyfre");
    } else {
      event.preventDefault();
      setErrorHandler(false);
      ranArr.forEach((elem, index, arr) =>
        checkArray(elem, index, arr, userNumber, numbersQuantity)
      );
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
  const checkArray = (elem, index, arr, number, arrLength) => {
    if (elem === number) {
      if (index < arrLength) {
        if (evenCheck === true && elem % 2 === 0) {
          // wiem ze tutaj dubluje warunki ale uznalem ze tak bedzie prosciej i czytelniej
          resVal = true;
        } else if (evenCheck !== true && elem % 2 !== 0) {
          resVal = true;
        }
      } else if (index >= arrLength) {
        checkVal = true;
      }
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
