import React, {useEffect} from 'react'
import {Container, ButtonGroup} from 'reactstrap'
import {useDispatch} from 'react-redux'
import { Route, Switch, useHistory, Link, Redirect } from 'react-router-dom'
import '../styles/index.scss'
import Header from './Header/Header'
import HomePage from './HomePage/HomePage'
import Login from './Login/Login'
import Cookies from 'js-cookie'

import {signin} from './Login/LoginAction'

var createHost = require('../common/crossdomain/host');
import {baseUrl} from '../utils/api.config'

function runOnDevSalesFloor() {
    // const lsKeys = [
    //   'checkoutRegisterInfo',
    //   'hostname',
    //   'reg',
    //   'registerInfo',
    //   'apiStoreNumber',
    //   'registerInfoType',
    //   'storeInfo',
    //   'storenumber',
    //   'userInfo',
    //   'username',
    //   'testSession'
    // ];
    // const ssKeys = ['sessionToken', 'workfile'];
    // let noValues = false;
    // const lsCommand = lsKeys.map((key,i ) => ({
    //   key,
    //   value: localStorage.getItem(key)
    // }));
    // const ssCommand = ssKeys.map((key,i ) => {
    //   if(key ===  'sessionToken' && !sessionStorage.getItem(key)) {
    //     noValues = true;
    //   }
    //   return {
    //     key,
    //     value: sessionStorage.getItem(key)
    //   };
    // });
    // return noValues ? null : `${JSON.stringify(lsCommand)}--${JSON.stringify(ssCommand)}`;
    const lsKeys = JSON.stringify(localStorage);
    const ssKeys = JSON.stringify(sessionStorage);
    return `${lsKeys}--${ssKeys}`;
  }

const App = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    // useEffect(() => {
    //     var storageHost = createHost([
    //         {
    //             origin: baseUrl('HOME'),
    //             allowedMethods: ['get', 'set', 'getsession', 'remove'],
    //         },
    //         {
    //             origin: baseUrl('SEARCH'),
    //             allowedMethods: ['get', 'getsession'],
    //         },
    //         {
    //             origin: baseUrl('ORDERS'),
    //             allowedMethods: ['get', 'getsession'],
    //         },
    //     ]);
    //     const profile = sessionStorage.getItem('profile');
    //     const storeNumber = localStorage.getItem('storenumber')
    //     Cookies.set('profile',profile );
    //     debugger;
    //     console.log('cookieieieieei',Cookies.get('profile'))
    //     // Cookies.set('profile',profile , { domain: '.netlify.app' });
    //     // const previousUrl = document.referrer; ////to access different previous domain
    //     const localHis = history?.location;
    //     if(!!profile) {
    //         dispatch(signin(profile, history, true));
    //         // history.push(localHis);
            
    //     } else {
    //         history.push('/login', {from: localHis || "/"});
    //         // history.push('/login', { from: previousUrl });  //to access different previous domain
    //     }   
    // },[]);

    useEffect(() => {
        const profile = sessionStorage.getItem('profile');
        const storeNumber = localStorage.getItem('storenumber')
        // Cookies.set('profile',profile);
        // debugger;
        // console.log('cookieieieieei',Cookies.get('profile'))
        // Cookies.set('profile',profile , { domain: '.netlify.app' });
        // const previousUrl = document.referrer; ////to access different previous domain
        const localHis = history?.location;
        if(!!profile) {
            const ghk = runOnDevSalesFloor();
            debugger;
            // Cookies.set('profile', ghk);
            // Cookies.set('profile', ghk , { domain: 'netlify.app' });
            var LastReportGenerated="Jul 11 2021",
            baseDomain = '.netlify.app',
            expireAfter = new Date();
            
            //setting up  cookie expire date after a week
            expireAfter.setDate(expireAfter.getDate() + 7);
            
            //now setup cookie
            document.cookie="profile={'ReportName':'MainReport', 'lastGenerated':" + LastReportGenerated + "}; domain=" + baseDomain + "; expires=" + expireAfter + "; path=/";

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