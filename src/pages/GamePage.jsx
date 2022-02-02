import React, {useEffect, useState} from 'react';
import Menu from '../Components/SidebarMenu/Menu';
import { Container, Row, Col } from 'react-bootstrap';

const numbersQuantity = 20;
const numbersRange = 50; 
const inputNumber = 1;

const GamePage = () => {
    const [userNumber, setUserNumber] = useState(false), 
          [userNumberHandler, setUserNumberHandler] = useState(false),
          [errorHandler, setErrorHandler]= useState(false);

    const ranArr = Array.from({length:numbersQuantity},() => Math.floor(Math.random() * numbersRange));
    const inputHandler = (text) => {
      setUserNumberHandler(text.target.value)
    };
    const saveUserNumber = (event) => {
      if (isNaN(userNumberHandler)) {
        event.preventDefault();
      setUserNumber(userNumberHandler)
      } else {
        setErrorHandler('Podaj cyfre')
      }
    };
    const keyHolder = (event) =>{
      if (event.key === 'enter' && typeof userNumberHandler === 'number') {
        setUserNumber(userNumberHandler);
      }
    };

    useEffect(() => {
    }, [inputNumber]);
    
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
                <button type='submit' onClick={saveUserNumber}>SEND</button>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Twoja liczba to {userNumber}</p>
                {errorHandler}
              </Col>
              <Col>
                <p>Dlugosc tablicy to {ranArr.length}</p>
                <p>{ranArr}</p>
              </Col>
            </Row>
            
          </Container>  
      </>
  )
};

export default GamePage;
