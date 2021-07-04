import React, {useState, useEffect} from 'react';
import { Jumbotron, Container, Input } from 'reactstrap';
// import './searchbyitem.scss'
import {useDispatch, useSelector} from 'react-redux'
// import {callList} from './SearchByItemAction'
// import SearchContainer from './SearchContainer'

import SearchByItem from '../SearchByItem/SearchByItem'

const HomePage = () => {
    const dispatch = useDispatch();
    // const [inputVal, setinputVal] = useState('');
    const items = useSelector(state => state?.SearchByItem?.items);
    return(
        <div className="searchbyitem">
            <Jumbotron fluid>
                <Container fluid>
                    <h1>Homepage</h1>
                    <SearchByItem />
                    {/* <Input 
                    placeholder="search by city name" 
                    type="text" 
                    onKeyUp={onChangeInput} />
                    <SearchContainer items={items || []}/> */}
                </Container>
            </Jumbotron>
           
        </div>
    )
}

export default HomePage;