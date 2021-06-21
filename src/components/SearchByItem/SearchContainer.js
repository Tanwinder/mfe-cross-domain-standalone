import React, {useState, useEffect} from 'react';
import { Container, Input, ListGroup, ListGroupItem, Button } from 'reactstrap';
import {useSelector} from 'react-redux'

const ListItems = ({itemsVal, onClickAddToCart}) => {
  return (
    <ListGroup>
      {
          itemsVal && itemsVal.map(item => {
              return(
                <ListGroupItem className="searchList" key={item._id}>
                    {/* <input type="checkbox" name={}> */}
                    <Button onClick={() => onClickAddToCart(item)}>Add to Cart</Button>
                    <div>{item?.customer?.email}</div>
                    <div>{item.purchaseMethod}</div>
                    <div>{item.storeLocation}</div>
                    <div>{item.couponUsed ? 'Coupon Used' : ""}</div>
                </ListGroupItem>
              )
          })
      }
    </ListGroup>
  );

}
const SearchContainer = ({items, onClickAddToCart}) => {
    return(
        <div className="SearchContainer">
            <Container fluid>
                <ListItems itemsVal={items} onClickAddToCart={onClickAddToCart} />
            </Container>
           
        </div>
    )
}

export default SearchContainer;