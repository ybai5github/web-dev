import React from "react";
import Labs from "../labs";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
import WhoToFollowList from "./WhoToFollowList";
import PostSummaryItem from "./PostSummaryList/PostSummaryItem";
import PostSummaryList from "./PostSummaryList";
import ExploreComponent from "./ExploreScreen/ExploreComponent";
import ExploreScreen from "./ExploreScreen/ExploreScreen";

const Tuiter = () =>{
    return(
        <>
            <h1>Tuiter</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/">
                Labs
            </Link>
            <NavigationSidebar active="Home"/>

            {/*<WhoToFollowListItem who={{*/}
            {/*    avatarIcon: '/images/virgin.svg',*/}
            {/*    userName: 'Virgin Galactic',*/}
            {/*    handle: 'virgingalactic',*/}
            {/*}}*/}
            {/*/>*/}
            <WhoToFollowList/>

            {/*<PostSummaryItem post={{*/}
            {/*    "topic": "Web Development",*/}
            {/*    "userName": "",*/}
            {/*    "title": "jQuery",*/}
            {/*    "time": "last week",*/}
            {/*    "image": "/images/jquery.png",*/}
            {/*    "tweets": "122K"*/}
            {/*}}/>*/}
            <PostSummaryList/>

            {/*<ExploreComponent/>*/}

            <ExploreScreen/>




        </>
    )
};

export default Tuiter;