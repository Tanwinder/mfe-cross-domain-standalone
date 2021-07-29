import React, { useState, useCallback, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useWindowEvent } from '../../common/useWindowEvent';
import ItemDetails from '../../presentational/ItemDetails';
import { addToCart } from './Actions';
import { useSelector, useDispatch } from 'react-redux';

const LeftPanel = () => {
  // const [itemsArr, setItemsArr] = useState([]);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state?.cart);
  const itemsArr = cart?.items;
  const addToCartEvent = useCallback((event) => {
    const isDuplicate = itemsArr && itemsArr.some((item) => item._id === event.detail._id);
    if (event && !isDuplicate) {
      const details = event?.detail;
      dispatch(addToCart(details));
    }
  }, []);
  useWindowEvent('addToCart', addToCartEvent);
  return (
    <Container className="leftpanel" fluid={true}>
      <h2>Cart</h2>
      {itemsArr && itemsArr.length > 0 ? <ItemDetails items={itemsArr} /> : 'No Item is selected'}
    </Container>
  );
};

export default LeftPanel;
