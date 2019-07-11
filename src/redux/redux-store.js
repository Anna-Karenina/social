import { applyMiddleware, combineReducers, createStore } from 'redux';

import authReducer from './auth-reducer';
import dialogsPageReducer from './dialogsPage-reducer';
import friendsPageReducer from './friendsPage-reducer';
import userPageReducer from './userPage-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  userPage : userPageReducer,
  dialogsPage: dialogsPageReducer,
  friendsPage: friendsPageReducer,
  auth: authReducer

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;
