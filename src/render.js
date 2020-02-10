import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import App from "./App";
import React from "react";
import {addPost} from "./redux/state";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>, document.getElementById('root'));
}
