// third-party
import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware,createStore } from "redux";
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
// project import
import reducers from './reducers/index';


// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //
const sagaMiddleware = createSagaMiddleware();
const middleWares=[sagaMiddleware];
const store = createStore(reducers,{},applyMiddleware(...middleWares));


const { dispatch } = store;

export { store, dispatch };
