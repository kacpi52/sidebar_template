import React , {useState, useEffect} from 'react';
import './TopList.scss';
import {Container, Row} from 'react-bootstrap';
import SingleElem from './SingleElem';
import { titleArray } from './TitleArray';

const TopList = () => {
    let displayArray = [];
    const [listSize , setListSize] = useState(0),
    [buttonVisibility, setButtonVisibility] = useState(true);

    
    const extendListSize = () => {
        setListSize(listSize+10);
    }
    for (let i = 0; i < listSize; i++) {
        displayArray.push(<SingleElem movieTitle={titleArray[i]}/>);
    }
    const scrollListener = () => {
        let visibilityDistance = 0;
        if(listSize > 11 && listSize <21){
            visibilityDistance = 2000;
        } else if (listSize > 20 ){
            visibilityDistance = 3000;                   // tu narazie te wartosci sa na sztywno 
        } else {
            visibilityDistance = 1000;
        }

        const distFromTop = document.body.scrollTop ||
            document.documentElement.scrollTop;;
        if (distFromTop > visibilityDistance) {
            setButtonVisibility(false);
            console.log(visibilityDistance);
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
            <button className={buttonVisibility ? 'List__button' : 'List__button--hidden'} onClick={extendListSize}>{listSize>0 ? 'SHOW MORE' : 'TOP 10'}</button>
            <Container>
                <Row>
                    {displayArray}
                 </Row>
            </Container>
        </div>
    )
}

export default TopList;
