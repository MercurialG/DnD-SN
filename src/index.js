import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hi, how are you', likesCount: 12},
    {id: 2, message: 'SKOKA LAIKOV?', likesCount: 212},
    {id: 3, message: 'Bibyao', likesCount: 17},
    {id: 4, message: 'Subscribe!', likesCount: 3},
    {id: 5, message: 'Like me!', likesCount: 9890},
    {id: 6, message: 'Hi! This is my first post!', likesCount: 1},
]

let dialogues = [
    {id: 1, name: 'Ilyuha'},
    {id: 2, name: 'Sanya'},
    {id: 3, name: 'Des'},
    {id: 4, name: 'Asya'},
    {id: 5, name: 'Chipas'},
    {id: 6, name: 'Toha'},
]

let messages = [
    {id: 1, message: 'Hi, how are you'},
    {id: 2, message: 'Alo pedik?!'},
    {id: 3, message: 'Go buhat'},
    {id: 4, message: 'Love you'},
    {id: 5, message: 'JRATT!'},
    {id: 6, message: 'Bibidoks'},
]


ReactDOM.render(<App  posts={posts} dialogues={dialogues} messages={messages}/>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
