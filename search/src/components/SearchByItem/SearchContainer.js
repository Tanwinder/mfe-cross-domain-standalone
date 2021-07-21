import React, {useState, useEffect} from 'react';
import { Container, Input, ListGroup, ListGroupItem } from 'reactstrap';
import {useSelector} from 'react-redux'

const ListItems = ({itemsVal, onSelectItem}) => {
  return (
    <ListGroup>
      {
          itemsVal && itemsVal.map(item => {
              return(
                <ListGroupItem className="searchList" key={item._id} onClick={() => onSelectItem(item)}>
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
const SearchContainer = ({items, onSelectItem}) => {
    return(
        <div className="SearchContainer">
                <ListItems itemsVal={items} onSelectItem={onSelectItem}/>
           
        </div>
    )
}

export default SearchContainer;