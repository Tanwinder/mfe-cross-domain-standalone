import React, {useState, useEffect} from 'react';
import { Jumbotron, Container, Row, Button } from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux';

const SearchByItem = React.lazy(() => import('search/SearchByItem'))

const RightPanel = () => {
    const dispatch = useDispatch();
    const [showSearch, setShowSearch] = useState(false);
    return(
        <Container className="themed-container rightPanel" fluid={true}>
            <Row xs="12">
            <Button type="button" onClick={() => setShowSearch((showSearch) => setShowSearch(!showSearch))}> Search </Button>
            </Row>
            <Row xs="12">
            <React.Suspense fallback={<div>Loading Search...</div>}>
                    {
                        showSearch ?
                        <SearchByItem />
                        :
                        ""
                    }
                    </React.Suspense>
            </Row>
        </Container>
    )
}

export default RightPanel;