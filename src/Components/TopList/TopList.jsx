import React , {useState} from 'react';
import './TopList.scss';
import {Container, Row} from 'react-bootstrap';
import SingleElem from './SingleElem';
import { titleArray } from './TitleArray';

const TopList = () => {
    let displayArray = [];
    const [listSize , setListSize] = useState(0); 
    const extendListSize = () => {
        setListSize(listSize+10);
    };
    for (let i = 0; i < listSize; i++) {
        displayArray.push(<SingleElem movieTitle={titleArray[i]}/>);
    }

    return (
        <div className='List'>
            <button className='List__button' onClick={extendListSize}>{listSize>0 ? 'SHOW MORE' : 'TOP 10'}</button>
            <Container>
                <Row>
                    {displayArray}
                 </Row>
            </Container>
        </div>
    )
}

export default TopList;
