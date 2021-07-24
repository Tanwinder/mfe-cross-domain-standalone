import 'regenerator-runtime/runtime';
import React from 'react';
import {render} from 'react-dom'

import App from './components/App'

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';

import SearchByItem from './components/SearchByItem/SearchByItem'


// render(
//   <Provider store={store} >
//     <SearchByItem />
//     {/* <BrowserRouter>
//       <App />
//     </BrowserRouter> */}
//   </Provider>,
//   document.getElementById('root')
// );

export default function() {
  return (<Provider store={store} >
    <SearchByItem />
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
  </Provider>)
}