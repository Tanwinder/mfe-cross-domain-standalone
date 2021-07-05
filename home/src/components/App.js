import React, {useEffect} from 'react'
import {Container, ButtonGroup} from 'reactstrap'
import {useDispatch} from 'react-redux'
import { Route, Switch, useHistory, Link, Redirect } from 'react-router-dom'
import '../styles/index.scss'
import Header from './Header/Header'
import HomePage from './HomePage/HomePage'
import Login from './Login/Login'

import {signin} from './Login/LoginAction'

var createHost = require('../common/crossdomain/host');
import baseUrl from '../utils/api.config'

const App = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        var storageHost = createHost([
            {
                origin: baseUrl('HOME'),
                allowedMethods: ['get', 'set', 'getsession', 'remove'],
            },
            {
                origin: baseUrl('SEARCH'),
                allowedMethods: ['get', 'getsession'],
            },
            {
                origin: baseUrl('ORDERS'),
                allowedMethods: ['get', 'getsession'],
            },
        ]);
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
    },[]);
    return(
        <div className="home">
            <Header/>
            <Container>
                <Switch>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                    <Route path="/login" >
                        <Login/>
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </Container>
        </div>
    )
}

export default App;