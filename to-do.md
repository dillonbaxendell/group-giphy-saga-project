[ SET UP - React/Redux ]
    [X] npm install
    [X] npm install redux 
    [X] npm install react-redux
    [X] npm install redux-logger
    [X] npm install react-router-dom
    [x] npm install express
    [X] Make Components
        [X] FavoritesList
        [X] FavoritesItem
        [X] Search
    [X] Material UI ?
        [X] npm install @material-ui/core
        [X] npm install @material-ui/icons
        [X] npm install @fontsource/roboto
            [ x ] import '@fontsource/roboto';
    [  ] Bootstrap ?
        [  ] npm install react-bootstrap bootstrap@4.6.0
    [X] SweetAlert?
        [X] npm install sweetalert --save
        [ ] import swal from 'sweetalert';
    [  ] IN DATABASE
        [  ] Make database and table, ect from data.sql
        [  ] Make sure to input at least one data point so you can test your GET route
    [ ] IN APP
        [ x ] import {Route, HashRouter as Router} from 'react-router-dom';
        [ x ] Wrap the app in a <Router>
        [ ] Admin or Client?
            [ ] Client
                [ ] Make Routes through the different pages
            [ ] Admin
                [ ] Make Routes through the different pages
    [  ] IN INDEX.JS 
        [ x ] import {createStore, combineReducers, applyMiddleware} from 'redux';
        [ x ] import {Provider} from 'react-redux';
        [ x ] import logger from 'redux-logger';
        [ x ] Create Store
            [ x ] Wrap with combineReducers
                [ x ] Pass in reducers
            [ x ] applyMiddleware
                [ x ] logger
        [  ] React.DOM.render
            [  ] React.StrictMode?
            [ x] Wrap the app in a <Provider> and give the provider a store -> <Provider store={store}>
            [  ] Service Worker?
    [  ] SERVER.JS
        [  ] Will need to make an express route to './routes/feedback.router.js
    [ ] FEEDBACK.ROUTER.JS
        [  ] const import express = require('express)
        [  ] const router = express.Router();
        [  ] const pool = require('../modules/pool');
        [  ] Post request to database

[ REDUX SAGA
   [ x ] import {takeEvery, put} from 'redux-saga/effects'
   [ x ] import createSagaMiddleware from 'redux-saga'
      [ x ] in the store - applyMiddleware(sagaMiddleware, logger)
   [ x ] const sagaMiddleware = createSagaMiddleware()
   [ x ] sagaMiddleware.run(watcherSaga)

[ databases ]
    [ ] CREATE TABLE "category" (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR (100) NOT NULL
);
    [ ] CREATE TABLE "favorites" (
        "id" SERIAL PRIMARY KEY,
        "category_id" INT REFERENCES "category"
        "favorite" BOOLEAN DEFAULT FALSE;
);

[ header ]
    [ will have a button to navigate you to whatever screen you are not on ]
[ Home ] Mary/Ian
    [ Search input and submit button ] - DONE
    [ !!! Connect to the API and return one result !!! ] - IMPORTANT VITAL DO THIS FIRST - DONE
    [ display the result onto the page ]
    [ favorite button ] 
        [ if clicked, will save the url to the database ]
    [ Refresh component ]
        [ click this, images goes away, inputs clear, do a new search ]
    [ Stretch!!! Random image? ]
[ Favorites Page ]
    [ Display all favorite images ]
        [ Favorite Item component ]
            [ display the image ]
            [ unfavorite button - that will connect to the database ]
            [ category selection (dropdown/radio button/dealer's choice.) -> will connect to the database ]
           [ STRETCH GOAL - edit feature]
                [ Create a category ]
                