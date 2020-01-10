import React from "react";
import classes from "./Dialogues.module.css"
import {NavLink} from "react-router-dom";
import Message from "./Message";
import DialogueItem from "./DialogueItems";

const Dialogues = (props) => {
    return (
        <div className={classes.dialogues}>
            <div className={classes.diaItems}>
                <DialogueItem name="Ilyuha" id="1" />
                <DialogueItem name="Sanya" id="2" />
                <DialogueItem name="Des" id="3" />
                <DialogueItem name="Asya" id="4" />
                <DialogueItem name="Chipas" id="5" />
                <DialogueItem name="Toha" id="6" />
            </div>
            <div className={classes.messages}>
                <Message message="Hi"/>
                <Message message="Yo"/>
                <Message message="LOL"/>
            </div>
        </div>

    )
};

export default Dialogues