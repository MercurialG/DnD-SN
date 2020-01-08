import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>My posts
                <div>
                    <textarea></textarea>
                    <button>Add Post</button>
                    <button>Remove</button>
                </div>
                <Post message='Hi'/>
                <Post message="It's my first post" count='212'/>
                <Post message='Lol' count='20'/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
};
export default MyPosts;