import React from "react";
import classes from "./Dialogues.module.css"
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogueItem from "./DialogueItem/DialogueItems";

const Dialogues = (props) => {

    let dialogueElements = props.dialogues.map(d => <DialogueItem name={d.name} id={d.id}/>);
    let messageElements = props.messages.map(m => <Message message={m.message}/>);


    return (
        <div className={classes.dialogues}>
            <div className={classes.diaItems}>
                {dialogueElements}
            </div>

            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>

    )
};

export default Dialogues