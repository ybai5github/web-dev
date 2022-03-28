import React from "react";
import {useSelector} from "react-redux";
import ProfileListItem from "./profile-list-item";
import profileReducer from "../reducers/profile-reducer";

const ProfileList = () => {
    const profiles = useSelector(state => state.profiles);
    return(
        <div>
            {profiles && profiles.map && profiles.map((profile) =>
                <ProfileListItem profile={profile}/>)
                }
        </div>
    );
}
export default ProfileList;