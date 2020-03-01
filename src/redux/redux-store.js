import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth-reducer';
import dialogsPageReducer from './dialogsPage-reducer';
import friendsPageReducer from './friendsPage-reducer';
import userPageReducer from './userPage-reducer';
import appReducer from './app-reducer'
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
  userPage : userPageReducer,
  dialogsPage: dialogsPageReducer,
  friendsPage: friendsPageReducer,
  app: appReducer,
  auth: authReducer,
  form: formReducer,
});

// let store = createStore(reducers,  applyMiddleware(thunkMiddleware), );

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunkMiddleware), ));
export default store;
