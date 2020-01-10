import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css"

const MyPosts = () => {
    return (
        <div>
            <div><h3>My posts</h3>
                <div>
                    <div><textarea></textarea></div>
                    <div><button>Add Post</button></div>
                    <button>Remove</button>
                </div>
                <div className={classes.posts}>
                <Post message='Hi'/>
                <Post message="It's my first post" count='212'/>
                <Post message='Lol' count='20'/>
                <Post/>
                <Post/>
            </div>
            </div>
        </div>
    )
};
export default MyPosts;