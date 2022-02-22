import React, {useState} from 'react';
import Menu from '../Components/SidebarMenu/Menu';
import { Container, Row, Col } from 'react-bootstrap';

const numbersQuantity = 20;
const numbersRange = 20; 
const ranArr = Array.from({length:numbersQuantity},() => Math.floor(Math.random() * numbersRange));
const triesLimit = 3;

const GamePage = () => {
    const [userNumber, setUserNumber] = useState(false), 
          [errorHandler, setErrorHandler]= useState(false),
          [resultHandler, setResultHandler]= useState(false),
          [triesCounter, setTriesCounter]= useState(0);
   
    const inputHandler = (text) => {
      setUserNumber(parseInt(text.target.value))
    };
    const saveUserNumber = (event) => {
      setTriesCounter(triesCounter+1);
      if (isNaN(userNumber)) {
        setErrorHandler('Podaj cyfre')
      } else {
      event.preventDefault();
      setErrorHandler(false);
      if (triesCounter<triesLimit) {
        iterArray(ranArr);
      }
      }
      
    };
    
    const iterArray = (array) => {
      let i = 0;
      while (array[i-1] !== userNumber && i<numbersRange){
        i+=1;
        console.log(i);
      };
      if (array[i-1] === userNumber){
        setResultHandler(true);
        console.log(`traf na iteracji ${i}`);
      } else {
        setResultHandler(false);
      }
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
                <input type='text' onChange={inputHandler}  />
                <button type='submit' onClick={saveUserNumber}>PLAY</button>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Twoja liczba to {userNumber}</p>
                {errorHandler}
                <p>Wynik gry: {resultHandler?  'Trafiles':'Graj dalej'}</p>
                <p>{triesCounter<triesLimit ? `Zostaly ci jeszcze ${triesLimit-triesCounter} próby` : `Wykorzystałeś limit prób`}</p>
              </Col>
              <Col>
                <p>Dlugosc tablicy to {ranArr.length}</p>
                <p>{ranArr.join(' , ')}</p>
              </Col>
            </Row>
            
          </Container>  
      </>
  )
};

export default GamePage;




/*
const keyHolder = (event) =>{
      if (event.key === 'enter' ) {
        // tego w sumie juz nie potrzebuje to
      }
    };
*/