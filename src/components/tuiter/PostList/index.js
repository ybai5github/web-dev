import React from "react";
import posts from "./posts.json";
import PostItem from "./PostItem.js";

const PostList= () => {

    return(

        posts.map(posts =>{
            return(
                <PostItem posts = {posts}/>
            );
        })
    )
}

export default PostList;