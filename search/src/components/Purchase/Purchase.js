import React, {useState, useEffect} from 'react';
// import {useDispatch, useSelector} from 'react-redux'
// import {callList} from './compAaction'
// import {List} from '../../presentational/List';
import { Link, Route, Switch } from 'react-router-dom'
import PurchaseByItem from '../PurchaseByItem/PurchaseByItem'
import SearchByItem from '../SearchByItem/SearchByItem'

const Purchase = () => {
    // const dispatch = useDispatch();
    // const [itemsVal, setItemsVal] = useState('even');
    // const items = useSelector(state => state?.Purchase?.items);
    // useEffect(() => {
    //     dispatch(callList(itemsVal));
    // }, [itemsVal])
    // const onClickBtn = (e) => {
    //     const gh = e.target?.dataset?.type;
    //     setItemsVal(gh);
    // }
    return(
        <div className="purchase">
            <Link to="/searchbyitem">SearchByItem</Link>{' '}
            <Link to="/purchasebyitem">PurchaseByItem</Link>{' '}
            <Switch>
                <Route path="/searchbyitem">
                    <SearchByItem />
                </Route>
                <Route path="/purchasebyitem">
                    <PurchaseByItem />
                </Route>
            </Switch>
        </div>
    )
}

export default Purchase;