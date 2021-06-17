import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

// what we need from redux saga
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';


// this is the saga that will watch for actions
function* watcherSaga(){

}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
      // pass reducers here
    }),
    applyMiddleware(sagaMiddleware, logger),
  );

  sagaMiddleware.run(watcherSaga)
  
ReactDOM.render(
<Provider store={store} >
    <App /> 
</Provider>,
document.getElementById('root'));
