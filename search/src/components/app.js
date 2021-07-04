import React, {useEffect} from 'react'
import { Container, Jumbotron } from 'reactstrap'
import '../styles/index.scss'
import Header from './Header/Header'
import Purchase from './Purchase/Purchase'

// var createHost = require('../common/crossdomain/host');
var createGuest = require('../common/crossdomain/guest');

// var storageHost = createHost([
//     {
//         origin: 'http://localhost:4000',
//         allowedMethods: ['get', 'set', 'remove'],
//     },
//     {
//         origin: 'http://localhost:4001',
//         allowedMethods: ['get'],
//     },
// ]);

const App = () => {
    useEffect(() => {
        var guestStorage = createGuest('http://localhost:4000');
        guestStorage.get('storenumber', function(error, value) {
            // value for the key of 'storenumber' will be retrieved from localStorage
            if(error) {
                guestStorage.close(); 
            } else {
                localStorage.setItem("storenumber", value);
                // localStorage.setItem("profile", value);
                console.log("value-------", value)
            }
        });
        guestStorage.getsession('profile', function(error, value) {
            // value for the key of 'profile' will be retrieved from localStorage
            if(error) {
                guestStorage.close(); 
            } else {
                sessionStorage.setItem("profile", value);
                // localStorage.setItem("profile", value);
                console.log("value-------", value)
            }
        });
    }, [])
    return(
        <div className="showroom">
            <Header/>
            <Jumbotron>
                <Container>
                    <Purchase />
                </Container>
            </Jumbotron>
            
        </div>
    )
}

export default App;