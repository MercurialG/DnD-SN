import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 12},
            {id: 2, message: 'SKOKA LAIKOV?', likesCount: 212},
            {id: 3, message: 'Bibyao', likesCount: 17},
            {id: 4, message: 'Subscribe!', likesCount: 3},
            {id: 5, message: 'Like me!', likesCount: 9890},
            {id: 6, message: 'Hi! This is my first post!', likesCount: 1},
        ]
    },
    messagesPage: {
        messages: [
            {id: 1, message: 'Hi, how are you'},
            {id: 2, message: 'Alo pedik?!'},
            {id: 3, message: 'Go buhat'},
            {id: 4, message: 'Love you'},
            {id: 5, message: 'JRATT!'},
            {id: 6, message: 'Bibidoks'},
            {id: 7, message: 'ohooel?'}
        ],
        dialogues: [
            {id: 1, name: 'Ilyuha'},
            {id: 2, name: 'Sanya'},
            {id: 3, name: 'Des'},
            {id: 4, name: 'Asya'},
            {id: 5, name: 'Chipas'},
            {id: 6, name: 'Toha'},
            {id: 7, name: 'Dimarik'}
        ]
    }
}


export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state);
}


export default state;
