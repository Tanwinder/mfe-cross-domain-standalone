import React, {useState, useEffect} from 'react';
import { Jumbotron, Container, Input } from 'reactstrap';
// import './searchbyitem.scss'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
// import {callList} from './SearchByItemAction'
// import SearchContainer from './SearchContainer'
import {signin} from '../Login/LoginAction'

import SearchByItem from '../SearchByItem/SearchByItem'

const Orders = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    // const [inputVal, setinputVal] = useState('');
    // const items = useSelector(state => state?.SearchByItem?.items);
    useEffect(() => {
        const profile = sessionStorage.getItem('profile');
        const storeNumber = localStorage.getItem('storenumber')
        // const previousUrl = document.referrer; ////to access different previous domain
        const localHis = history?.location;
        if(!!profile) {
            dispatch(signin(profile, history, true));
            // history.push(localHis);
            
        } else {
            history.push('/login', {from: localHis || "/"});
            // history.push('/login', { from: previousUrl });  //to access different previous domain
        } 
    }, []);
    return(
        <div className="searchbyitem">
            <Jumbotron fluid>
                <Container fluid>
                    <h1>Orders</h1>
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

export default Orders;