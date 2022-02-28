import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
            <li style="color: white; border: none;" class="wd-bg-color-black wd-bolded-font list-group-item">Who to follow</>
            <ul class="list-group">
            <!-- continue here -->
            
            ${who.map(who =>{
                return(WhoToFollowListItem(who));
            }).join('')
            }
            </ul>
`); }
export default WhoToFollowList;