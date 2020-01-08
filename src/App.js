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
                    <Route path='/Profile' component={Profile}/>
                    <Route path='/Dialogues' component={Dialogues}/>
                </div>
            </div>
        </BrowserRouter>)
};

export default App;
