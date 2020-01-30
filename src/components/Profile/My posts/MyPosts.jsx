import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css"

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'SKOKA LAIKOV?', likesCount: 212},
        {id: 3, message: 'Bibyao', likesCount: 17},
        {id: 4, message: 'Subscribe!', likesCount: 3},
        {id: 5, message: 'Like me!', likesCount: 9890},
        {id: 6, message: 'Hi! This is my first post!', likesCount: 1},
    ]

    let postElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div>
            <div><h3>My posts</h3>
                <div>
                    <div><textarea></textarea></div>
                    <div>
                        <button>Add Post</button>
                    </div>
                    <button>Remove</button>
                </div>
                <div className={classes.posts}>
                    {postElements}
                </div>
            </div>
        </div>
    )
};
export default MyPosts;