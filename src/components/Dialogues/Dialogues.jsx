import React from "react";
import classes from "./Dialogues.module.css"
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogueItem from "./DialogueItem/DialogueItems";

const Dialogues = (props) => {
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

    let dialogueElements = dialogues.map(d => <DialogueItem name={d.name} id={d.id}/>);
    let messageElements = messages.map(m => <Message message={m.message}/>);


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