import React, {useEffect} from 'react'
import { Container, Jumbotron } from 'reactstrap'
import '../styles/index.scss'
import Header from './Header/Header'
import Login from '../components/Auth/Login'
import Purchase from './Purchase/Purchase'

import {useDispatch, useSelector, Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Switch, Route,useHistory} from 'react-router-dom'
import store from '../store';

import {signin} from '../components/Auth/LoginAction'

import {envVariables} from '../utils/envVariables'

// create localStorage share between different domains
var createHost = require("cross-domain-storage/host");
var storageHost = createHost([
  {
    origin: envVariables(),
    allowedMethods: ["get", "set", "remove"],
  },
  {
    origin: envVariables("REMOTE"),
    allowedMethods: ["get", "set", "remove"],
  },
]);


const InsideApp = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        const profile = localStorage.getItem('profile');
        const localHis = history?.location;
        if(profile) {
            dispatch(signin(profile, history, true))
        } else {
            history.push('/login', {from: localHis || "/"});
        }

        // const previousUrl = document.referrer; ////to access different previous domain
        // const localHis = history?.location;
        // if(!profile) {
        //     history.push('/login', {from: localHis || "/"});
        //     // history.push('/login', { from: previousUrl });  //to access different previous domain
        // } else {
        //     history.push(localHis);
        // }   
    },[]);
    return(
        <Jumbotron>
           <Container>
               <div>
               <div>
               <a href={process.env.NODE_ENV === 'production' ? 'https://mfe-home.netlify.app/' : "http://localhost:4000/"}>Back to Home page</a></div>
               </div>
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
    )
}

const App = () => {
    // const items = useSelector(state => state?.SearchByItem?.items);
    return(
        <div className="showroom">
            <Provider store={store}>
                <InsideApp />
            </Provider>
            {/* <Header/> */}
            
            
        </div>
    )
}

export default App;