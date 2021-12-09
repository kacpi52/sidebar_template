import React , {useState} from 'react';
import './TopList.scss';
import {Container, Row} from 'react-bootstrap';
import SingleElem from './SingleElem';
import { titleArray } from './TitleArray';



const TopList = () => {
    
    const  [listSize, setListSize] = useState(0);
    let displayArray = [];
    for (let i = 0; i < listSize; i++) {
        displayArray.push(<SingleElem movieTitle={titleArray[i]}/>);
        console.log(listSize);
    }
    return (
        <div className='List'>
            <button className={listSize<30 ? 'List__button' : 'List__button--hidden'}
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
