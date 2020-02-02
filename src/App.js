import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav"
import Profile from "./components/Profile/Profile";
import Dialogues from "./components/Dialogues/Dialogues";
import {BrowserRouter, Route} from "react-router-dom"

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div class='app-wrapper-content'>
                    <Route path='/Profile' render={() => <Profile posts={props.posts}/>}/>
                    <Route path='/Dialogues' render={() => <Dialogues dialogues={props.dialogues} messages={props.messages}/>}/>
                </div>
            </div>
        </BrowserRouter>)
};

export default App;
