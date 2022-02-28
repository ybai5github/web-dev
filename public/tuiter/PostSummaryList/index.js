import post from "./post.js";
import PostSummaryItem from "./PostSummaryItem.js";


const PostSummaryList = () => {
    return(`
            <ul class="list-group wd-bg-color-black">
            <!-- continue here -->
            
            ${post.map(post =>{
                return(PostSummaryItem(post));
            }).join('')}
            </ul>
    `);
}

export default PostSummaryList;