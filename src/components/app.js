import React, {useEffect} from 'react'
import { Container, Jumbotron } from 'reactstrap'
import '../styles/index.scss'
import Header from './Header/Header'
import Login from '../components/Auth/Login'
import Purchase from './Purchase/Purchase'

import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Switch, Route} from 'react-router-dom'
import store from '../store';

const App = () => {
    // const items = useSelector(state => state?.SearchByItem?.items);
    useEffect(() => {
        // if(!sessionStorage.getItem('profile')) {
        //     window.location.href = "http://localhost:4000/login?";
        // }
    }, [])
    return(
        <div className="showroom">
            <Provider store={store}>
                <Jumbotron>
                    <Container>
                        <Switch>
                            <Route path="/login" >
                                <Login />
                            </Route>
                            <Route path="/showroom" >
                                <Purchase />
                            </Route>
                            <Route path="/" >
                                <Purchase />
                            </Route>
                        </Switch>
                    </Container>
                </Jumbotron>
            </Provider>
            {/* <Header/> */}
            
            
        </div>
    )
}

export default App;