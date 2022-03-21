import React from "react"
import post from "./post"
import PostSummaryItem from "./PostSummaryItem.js";

const  PostSummaryList = () => {
    return(

        post.map(post=>{
            return(
                <PostSummaryItem post={post}/>
            );
        })
    )

}

export default  PostSummaryList;