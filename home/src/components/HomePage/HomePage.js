import React, {useState, useEffect, useRef, useCallback} from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import './HomePage.scss'
// import {useDispatch, useSelector} from 'react-redux'
import LeftPanel from '../LeftPanel/LeftPanel';
import RightPanel from '../RightPanel/RightPanel';

const HomePage = () => {
    return(
        <Container fluid={true} className="homePage">
            <Row xs="12">
            <h2>Homepage</h2>
            </Row>
            <Row xs="2">
                <Col className="homePage__col">
                <LeftPanel />             
                </Col>
                <Col className="homePage__col">
                <RightPanel />
                </Col>
            </Row>
      </Container>
    )
}

export default HomePage;