import React, {useEffect} from 'react'
import {Container, ButtonGroup} from 'reactstrap'
import {useDispatch} from 'react-redux'
import { Route, Switch, useHistory, Link, Redirect } from 'react-router-dom'
import '../styles/index.scss'
import Header from './Header/Header'
import SearchByItem from '../components/SearchByItem/SearchByItem'
import {baseUrl} from '../utils/api.config'

const App = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    return(
        <div className="home">
            <Header/>
            <Container>
                <SearchByItem />
            </Container>
        </div>
    )
}

export default App;