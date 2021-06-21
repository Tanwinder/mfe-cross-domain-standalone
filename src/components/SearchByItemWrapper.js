// import React, { useEffect } from 'react'
// import { Provider } from 'react-redux'
// import rootSaga from '../sagas/rootSagas'
// import {reducers} from '../reducer/rootReducer';
// import SearchByItem from './SearchByItem/SearchByItem';

// const SearchByItemWrapper = ({store, ...rest}) => {
//     useEffect(()=> {
//         reducers.forEach(({name, reducer}) => {
//             store.injectReducer(name, reducer);
//         });
//         store.injectSaga('cart', rootSaga)
//     },[]);
    
//     return (
//         <Provider store={store || {}}>
//             <SearchByItem {...rest}/>
//         </Provider>
//     )
// }

// export default SearchByItemWrapper;
