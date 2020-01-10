import React from "react";
import classes from './ProfileInfo.module.css'
import MyPosts from "../My posts/MyPosts";

const ProfileInfo = () => {
    return (
        <div>
            <img className={classes.ba}
                 src='https://media.dnd.wizards.com/styles/story_banner/public/images/head-banner/DnD_DragonChess_Articles_Header.jpg'/>
        </div>
    )
};
export default ProfileInfo;