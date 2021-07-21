import React, {useState, useCallback, useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap'
import {useWindowEvent} from '../../common/useWindowEvent';


const ItemDetails = ({items}) => {
    return items && items.map( (item, i) => (
            <Row key={item._id} style={{background: i % 2 == 0 ? 'lightGray' : 'white', padding: '5px 2px'}} xs="12">
                <Col>{item.customer.email}</Col>
                <Col>{item.customer.age}</Col>
                <Col>{item.storeLocation}</Col>
            </Row>
        )
    )
}
const LeftPanel = () => {
    const [itemsArr, setItemsArr] = useState([]);
    const addToCartEvent = useCallback((event) => {
        if(event) {
            const details = event?.detail;
                setItemsArr((itemsArr) => {
                    const alreadyExist = itemsArr.some( item => details._id === item._id);
                    if(!alreadyExist) {
                        return [...itemsArr, details];
                    }
                    return itemsArr;
                });
            
        }
    }, [])
    useWindowEvent('addToCart', addToCartEvent);
    return(
        <Container className="leftpanel" fluid={true}>
            <h2>Cart</h2>
            {
                itemsArr && itemsArr.length > 0 ?
                <ItemDetails items={itemsArr} />
                :
                "No Item is selected"
            }
        </Container>
    )
}

export default LeftPanel;