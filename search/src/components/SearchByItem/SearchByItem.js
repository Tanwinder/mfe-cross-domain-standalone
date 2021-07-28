import 'regenerator-runtime/runtime';
import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Input } from 'reactstrap';
import './searchbyitem.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { callList } from './SearchByItemAction';
import SearchContainer from './SearchContainer';
// import store1 from '../../store/store'

const SearchByItem = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const [inputVal, setinputVal] = useState('');
  const items = useSelector((state) => state?.SearchByItem?.items);
  useEffect(() => {
    dispatch(callList(''));
  }, []);
  const onChangeInput = (event) => {
    if (event.key === 'Enter') {
      dispatch(callList(event.target.value));
    }
  };
  const onSelectItem = (item) => {
    const event = new CustomEvent('addToCart', { detail: item });
    window.dispatchEvent(event);
  };
  return (
    <div className="searchbyitem">
      <Input placeholder="search by city name" type="text" onKeyUp={onChangeInput} />
      {items && items.length > 0 ? (
        <SearchContainer items={items || []} onSelectItem={onSelectItem} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default SearchByItem;
