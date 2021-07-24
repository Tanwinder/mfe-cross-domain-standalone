import React, {useEffect} from 'react'
import {Container, ButtonGroup} from 'reactstrap'
import {useDispatch} from 'react-redux'
import { Route, Switch, useHistory, Link, Redirect } from 'react-router-dom'
import '../styles/index.scss'
import Header from './Header/Header'
import HomePage from '../views/HomePage/HomePage'
import Login from './Login/Login'
import ErrorBoundary from '../common/ErrorBoundries'

import {signin} from './Login/LoginAction'

const App = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        const profile = sessionStorage.getItem('profile');
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
            <ErrorBoundary>
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
            </ErrorBoundary>
        </div>
    )
}

export default App;