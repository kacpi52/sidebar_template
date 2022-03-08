import React, { useState } from "react";
import Menu from "../Components/SidebarMenu/Menu";
import { Container, Row, Col } from "react-bootstrap";

const numbersQuantity = 20;
const numbersRange = 20;
const ranArr = Array.from({ length: numbersQuantity }, () =>
  Math.floor(Math.random() * numbersRange)
);
const triesLimit = 3;
const selectedArray = [];

const GamePage = () => {
  const [userNumber, setUserNumber] = useState(false),
    [errorHandler, setErrorHandler] = useState(false),
    [resultHandler, setResultHandler] = useState(false),
    [triesCounter, setTriesCounter] = useState(0);

  console.log(selectedArray);
  const inputHandler = (text) => {
    setUserNumber(parseInt(text.target.value));
  };
  const saveUserNumber = (event) => {
    setTriesCounter(triesCounter + 1);
    if (isNaN(userNumber)) {
      setErrorHandler("Podaj cyfre");
    } else {
      event.preventDefault();
      setErrorHandler(false);
      if (
        triesCounter < triesLimit &&
        resultHandler !== true &&
        !selectedArray.includes(userNumber) // no i tutaj uzywajac tego warunku dalbym do jsx komunikat ze game over
      ) {
        setResultHandler(iterArray(ranArr, userNumber));
        ranArr.push(userNumber);
        selectedArray.push(userNumber);
      }
    }
  };

  const iterArray = (array, selectedNumber) => {
    let i = 0;
    while (array[i - 1] !== selectedNumber && i < array.length) {
      i += 1;
      console.log(i);
    }
    if (array[i - 1] === selectedNumber) {
      return true;
    } else {
      return false;
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
