import { combineReducers, createStore } from 'redux';

import dialogsPageReducer from './dialogsPage-reducer';
import friendsPageReducer from './friendsPage-reducer';
import userPageReducer from './userPage-reducer';

let reducers = combineReducers({
  userPage : userPageReducer,
  dialogsPage: dialogsPageReducer,
  friendsPage: friendsPageReducer
});

let store = createStore(reducers);


export default store;
