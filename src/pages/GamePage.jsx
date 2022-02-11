import React, {useState} from 'react';
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
      setUserNumberHandler(parseInt(text.target.value))
    };
    const saveUserNumber = (event) => {
      if (isNaN(userNumberHandler)) {
        setErrorHandler('Podaj cyfre')
      } else {
      event.preventDefault();
      setUserNumber(userNumberHandler);
      setErrorHandler(false);
      iterArray(ranArr);
      }
    };
    const keyHolder = (event) =>{
      if (event.key === 'enter' && typeof userNumberHandler === 'number') {
        setUserNumber(userNumberHandler);
      }
    };
    const iterArray = (array) => {
      let i = 0;
      setResultHandler(false)
      do {
        if (array[i]===userNumber){
          setResultHandler(true)
          console.log(`traf na iteracji ${i} wynik ${resultHandler}`);
          i+=1;
        } else {
          i+=1;
          console.log(`pudlo na iteracji ${i}`)
        }
      } while (i < array.length);
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
                <p>{ranArr.join(' , ')}</p>
              </Col>
            </Row>
            
          </Container>  
      </>
  )
};

export default GamePage;




/*
const checkNumber = (arr, number) => {
      setResultHandler(false);
      arr.forEach((element,index)=>{
        console.log(`ilosc iteracji : ${index}`);
        if (element === number) {
          setResultHandler(true);
        }
      });
    };

checkNumber(ranArr, userNumberHandler);
    */

/*
   const checkUntil = (array, number) => {
     do {
       setResultHandler(false);
       let i = 0;
       if(array[i] === number){
         setResultHandler(true);
         console.log(`traf na iteracji ${i}`);
       } else {
         i++;
         console.log(`pudlo na iteracji ${i}, wynik ${resultHandler}`);
         console.log(array[i]);
       }
      
     } while (resultHandler === true);
   };

*/