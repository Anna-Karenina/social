import { combineReducers, createStore } from 'redux';
import dialogsPageReducer from './dialogsPage-reducer';
import userPageReducer from './userPage-reducer';

let reducers = combineReducers({
  userPage : userPageReducer,
  dialogsPage: dialogsPageReducer
});

let store = createStore(reducers);


export default store;
