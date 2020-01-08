import React from "react";
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://miro.medium.com/max/480/1*5LGjgBL2kWpog3AodB569A.jpeg'></img>
            {props.message}
            <div>
                <span>{props.count} Like  </span>
                <span>Dislike</span>
            </div>
        </div>
    )
}
export default Post;