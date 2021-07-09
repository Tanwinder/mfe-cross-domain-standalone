import React, {useState,useEffect} from 'react'
import {Container, ButtonGroup} from 'reactstrap'
import {useDispatch, useSelector} from 'react-redux'
import { Route, Switch, useHistory, Link, Redirect } from 'react-router-dom'
import '../styles/index.scss'
import Header from './Header/Header'
import Orders from './Orders/Orders'
import Login from './Login/Login'
import {signin} from './Login/LoginAction'
import Cookies from 'js-cookie'

var createGuest = require('../common/crossdomain/guest');
import {baseUrl} from '../utils/api.config'

const App = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [storage, setStorage ] = useState(false);
    // const profile = sessionStorage.getItem('profile');
    // const {userInfo} = useSelector(state => state.user);
    useEffect(() => {
        let value = Cookies.get('profile');
        debugger;
        if (value) {
            console.log("ss and ls values-----------", value);
            const ghk = value.split("--");
            const lsArr = ghk[0] && JSON.parse(ghk[0]);
            const ssArr = ghk[1] && JSON.parse(ghk[1]);
            Object.keys(lsArr).forEach((y) => localStorage.setItem(y, lsArr[y]));
            Object.keys(ssArr).forEach((y) =>
              sessionStorage.setItem(y, ssArr[y])
            );
            setStorage(true);
          }
        // if(!profile) {
        //     var guestStorage = createGuest(baseUrl('HOME'));
        // guestStorage.getsession('profile', (error, value) => {
        //     // value for the key of 'profile' will be retrieved from localStorage
        //     if(error) {
        //         guestStorage.close();
        //         setStorage(true);
        //     } else {
        //         if(value){
        //             sessionStorage.setItem("profile", value);
        //         } 
        //         setStorage(true);
        //     }
        // });
        // guestStorage.get('storenumber', (error, value) => {
        //     // value for the key of 'storenumber' will be retrieved from localStorage
        //     if(error) {
        //     } else {
        //         localStorage.setItem("storenumber", value);
        //     }
        // })
        // }
    }, []);
    return(
        <div className="home">
            <Header/>
            {
                storage ?
                <Container>
                <Switch>
                    <Route path="/" exact>
                        <Orders />
                    </Route>
                    <Route path="/login" >
                        <Login/>
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </Container>
            :
            <div>Loading...</div>
            }
        </div>
    )
}

export default App;