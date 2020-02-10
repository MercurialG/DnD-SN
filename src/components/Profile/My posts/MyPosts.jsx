import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css"

const MyPosts = (props) => {


    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div>
            <div><h3>My posts</h3>
                <div>
                    <div><textarea ref={newPostElement}></textarea></div>
                    <div>
                        <button onClick={addPost}>Add Post</button>
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