import posts from "./posts.js"
import PostItem from "./PostItem.js"

const PostList =()=>{
    return(`
        <ul class="list-group wd-bg-color-black">
            
            ${posts.map(posts =>{
                return(PostItem(posts));
            }).join('')}
            </ul>
    
    `);
}
export default PostList;