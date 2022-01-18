import React, {useState, useEffect} from 'react';
import { Col, Image } from 'react-bootstrap';
import { searchByTitle } from '../../Lib/apiService';

const SingleElem = ({movieTitle}) => {
    const [movieData, setMovieData] = useState('batman');

    useEffect(async()=>{
        const ApiRespData = await searchByTitle(movieTitle);
        setMovieData(ApiRespData);
    },[movieTitle]);

    return (
        <Col xs={12} md={6} lg={4}>
            <Image src={movieData.Poster} rounded />
        </Col>
    )
}

export default SingleElem;
