import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./My posts/MyPosts";

const Profile = () => {
    return (
        <div>
            <img className={classes.ba}
                 src='https://media.dnd.wizards.com/styles/story_banner/public/images/head-banner/DnD_DragonChess_Articles_Header.jpg'/>
            <MyPosts/>
        </div>
    )
};
export default Profile;