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

const getResults = (state = [], action) => {
  switch (action.type){
    case 'SET_SEARCH_RESULTS':
      console.log(action.payload)
      return action.payload
    case 'CLEAR_REDUX':
      return []
    default:
      return state
  }
}

const getFavorite = (state = [], action) => {
  switch (action.type){
    case 'SET_FAVORITE':
      console.log(action.payload)
      return action.payload
      default:
        return state
  }
}

function* addFavorite(action) {
  // Setting the url to action.payload -> It DOES come over correctly from the client!
  let url = action.payload
  console.log(url) // this shows up as a string
  try{
    yield axios.post('/api/favorite', url);
    yield put({ type:'FETCH_FAVORITE'})
} catch (error) {
    console.error('error with post request', error)
}
}

// this is the saga that will watch for actions
function* watcherSaga(){
  yield takeEvery('FETCH_SEARCH', fetchSearch);
  yield takeEvery('FETCH_FAVORITE', fetchFavorite);
  yield takeEvery('ADD_FAVORITE', addFavorite);
  yield takeEvery('DELETE_FAVORITE', deleteFavorite);
}

//DELETE request - worker saga
function* deleteFavorite(action) {
  try {
    //does a DELETE request
    yield axios.delete(`/favorite/${action.payload.id}`)
    //put effect in a dispatch
    yield put({
        type: 'FETCH_FAVORITE'
    })
  } catch (error) {
    console.log('error with favorite in DELETE request', error);

  }
}

function* fetchFavorite(){
  try {
    const response = yield axios.get('/api/favorite')
console.log(response.data)
// put effect is dispatch
yield put({ type: 'SET_FAVORITE', payload: response.data})

} catch (error) {
    console.log('error with favorite get request', error);
}
}

function* fetchSearch(action){
  console.log('gif search')
  console.log(action.payload)
  try {
    let newSearch = action.payload;
    let response = yield axios.get(`/api/search?q=${newSearch}`)
    console.log(' response from api', response.data.data)
    yield put({ type: 'SET_SEARCH_RESULTS', payload: response.data.data})
    // response.data.data[0].images.fixed_width_small.url
  } catch (error){
    console.log('error getting giphy', error)
  }
}
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
      // pass reducers here
      getResults,
      getFavorite
    }),
    applyMiddleware(sagaMiddleware, logger),
  );

  sagaMiddleware.run(watcherSaga)
  
ReactDOM.render(
<Provider store={store} >
    <App /> 
</Provider>,
document.getElementById('root'));
