import React , {useState, useEffect} from 'react';
import './TopList.scss';
import {Container, Row} from 'react-bootstrap';
import SingleElem from './SingleElem';
import { titleArray } from './TitleArray';

const TopList = () => {
    
    const  [listSize, setListSize] = useState(0),
    [buttonVisibility, setButtonVisibility] = useState(true);
    let displayArray = [];
    
    for (let i = 0; i < listSize; i++) {
        displayArray.push(<SingleElem movieTitle={titleArray[i]}/>);
    }
    const scrollListener = () => {
         const distFromTop = document.body.scrollTop ||
            document.documentElement.scrollTop;;
        if (distFromTop > 3500) {                                       // wartosc dana na sztywno
            setButtonVisibility(false);
        } else {
            setButtonVisibility(true)
        }
    }
    useEffect(() => {
            window.addEventListener("scroll", scrollListener);
        return () => {
            window.removeEventListener("scroll", scrollListener);
        }
    }, [])

    return (
        <div className='List'>
            <button className={buttonVisibility ? 'List__button' : 'List__button--hidden'}
                onClick={() => {
                     setListSize(listSize + 10)
                }}>
                 {listSize>0 ? 'SHOW MORE' : 'TOP 10'}
                 </button>
            <Container>
                <Row>
                    {displayArray}
                 </Row>
            </Container>
        </div>
    )
}

export default TopList;
