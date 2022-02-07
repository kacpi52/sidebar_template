import React, {useEffect, useState} from 'react';
import Menu from '../Components/SidebarMenu/Menu';
import { Container, Row, Col } from 'react-bootstrap';

const numbersQuantity = 20;
const numbersRange = 20; 
const ranArr = Array.from({length:numbersQuantity},() => Math.floor(Math.random() * numbersRange));

const GamePage = () => {
    const [userNumber, setUserNumber] = useState(false), 
          [userNumberHandler, setUserNumberHandler] = useState(false),
          [errorHandler, setErrorHandler]= useState(false),
          [resultHandler, setResultHandler]= useState(false);
   
    const inputHandler = (text) => {
      setUserNumberHandler(text.target.value)
    };
    const saveUserNumber = (event) => {
      if (isNaN(userNumberHandler)) {
        setErrorHandler('Podaj cyfre')
      } else {
        event.preventDefault();
      setUserNumber(userNumberHandler)
      setErrorHandler(false)
      }
    };
    const keyHolder = (event) =>{
      if (event.key === 'enter' && typeof userNumberHandler === 'number') {
        setUserNumber(userNumberHandler);
      }
    };


    const checkNumber = (arr, number) => {
      arr.forEach((element)=>{
        if (element === number) {
          setResultHandler(true);
          console.log(resultHandler);
        }
      });
    };

    useEffect(() => {
       checkNumber(ranArr, userNumber)
    }, [userNumber]);
    
    console.log(resultHandler);
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
                <input type='text' onChange={inputHandler} onKeyPress={keyHolder} />
                <button type='submit' onClick={saveUserNumber}>PLAY</button>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Twoja liczba to {userNumber}</p>
                {errorHandler}
                <p>Wynik gry: {resultHandler?  'Trafiles':'Graj dalej'}</p>
              </Col>
              <Col>
                <p>Dlugosc tablicy to {ranArr.length}</p>
                <p>{ranArr.map((elem)=>{
                  return  ` ${elem} ,` 
                })}</p>
              </Col>
            </Row>
            
          </Container>  
      </>
  )
};

export default GamePage;


