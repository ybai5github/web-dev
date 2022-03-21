import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"

const WhoToFollowList = () => {
    return (
        <>
            <li className="wd-bg-color-black wd-bolded-font list-group-item">Who to follow</li>
            <ul className="list-group wd-bolded-font">
                {
                    who.map(who =>{
                        return(<WhoToFollowListItem who={who}/>);
                    })
                }
            </ul>
        </>
    );
}
export default WhoToFollowList;