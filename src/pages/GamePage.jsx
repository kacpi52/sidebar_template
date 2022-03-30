import React, { useState } from "react";
import Menu from "../Components/SidebarMenu/Menu";
import { Container, Row, Col } from "react-bootstrap";

const numbersQuantity = 20;
const numbersRange = 20;
const ranArr = Array.from({ length: numbersQuantity }, () =>
  Math.floor(Math.random() * numbersRange)
);
const triesLimit = 5;
const selectedArray = [];
let filteredArray = [];

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
    let checkVal = false;
    setTriesCounter(triesCounter + 1);
    if (isNaN(userNumber)) {
      setErrorHandler("Podaj cyfre");
    } else {
      event.preventDefault();
      setErrorHandler(false);
      filteredArray = evenFilter(ranArr);
      selectedArray.forEach((elem) => {
        if (elem === userNumber) {
          checkVal = true;
        } else {
          checkVal = false;
        }
      });
      setRepeatError(checkVal);
      if (
        triesCounter < triesLimit &&
        resultHandler !== true &&
        checkVal !== true
      ) {
        setResultHandler(iterArray(filteredArray, userNumber));
        filteredArray.push(userNumber);
        selectedArray.push(userNumber);
        console.log(selectedArray);
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
            <p>{repeatError && "Wybrales ta sama liczbę dwa razy z rzędu "}</p>
          </Col>
          <Col>
            <button type="submit" onClick={resetAll}>
              RESTART
            </button>
            <p>Dlugosc tablicy to {ranArr.length}</p>
            <p>{ranArr.join(" , ")}</p>
            <p>Przesortowana tablica to </p>
            <p>{filteredArray.join(" , ")}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GamePage;
