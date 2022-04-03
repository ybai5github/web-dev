import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
//import who from "./who.json"
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    return (
        <>
            <li className="wd-bolded-font list-group-item">Who to follow</li>
            <ul className="list-group wd-bolded-font">
                {
                    who.map(who =>{
                        return(<WhoToFollowListItem who={who} key={who.username}/>);
                    })
                }
            </ul>
        </>
    );
}
export default WhoToFollowList;