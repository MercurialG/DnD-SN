import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav"
import Profile from "./components/Profile/Profile";
import Dialogues from "./components/Dialogues/Dialogues";
import {BrowserRouter, Route} from "react-router-dom"
import {updateNewPostText} from "./redux/state";


const App = (props) => {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path='/Profile'
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           updateNewPostText={props.updateNewPostText}
                           addPost={props.addPost}/>}/>
                <Route path='/Dialogues'
                       render={() => <Dialogues
                           dialogues={props.state.messagesPage.dialogues}
                           messages={props.state.messagesPage.messages}/>}/>
            </div>
        </div>
    )
};

export default App;
