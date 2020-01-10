import classes from "./Dialogues.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogueItem = (props) => {
    let path = "/dialogues/" + props.id;
    return (
        <div className={classes.dialogue}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default  DialogueItem;