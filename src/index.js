import './index.css';

import {BrowserRouter} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';

import {newPost, updateNewPostText} from './redux/state.js';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {subScribe} from './redux/state';



let rerenderEntireTree = (state) =>{
    ReactDOM.render(
     <BrowserRouter>
        <App state={state}
             newPost={newPost}
             updateNewPostText={updateNewPostText} />
      </BrowserRouter>,  document.getElementById('root'));
    }

rerenderEntireTree  (state);
subScribe(rerenderEntireTree);




serviceWorker.unregister();
