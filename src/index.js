import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//Promise we downloaded
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

//Pass ReduxPromise as an argument to the applyMiddleware function
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
