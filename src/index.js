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

const favoriteList = (state = [], action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
        return action.payload
        default:
            return state;
    }
}

function* fetchFavorite() {
    try {
        const response = yield axios.get('/api/favorite')
        console.log(response.data)
        yield put({ type: 'SET_FAVORITE', payload:response.data})
    } catch (error) {
        console.log('error with favorite get request', error)
    }
}

function* addFavorite() {

}

function* updateFavorite() {

}

// this is the saga that will watch for actions
function* watcherSaga(){
    yield takeEvery('FETCH_FAVORITE', fetchFavorite)
    yield takeEvery('ADD_FAVORITE', addFavorite)
    yield takeEvery('UPDATE_FAVORITE', updateFavorite)
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
