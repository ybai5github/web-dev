import {useDispatch, useSelector} from "react-redux";
import EditProfileScreen from "./EditProfileScreen";
import {Link} from "react-router-dom";


const ProfileListItem = ({profile})=>{
    const dispatch = useDispatch();
    const profiles = useSelector(state => state.profiles);

    return(
        <>
            <div className="row">
                <div className="col-1">
                    <i className="fas fa-arrow-left"></i>
                </div>

                <div className="col-11">
                    <div className="pb-2 wd-font-white" style={{fontSize: '20px'}}>
                        {profile.fullName}
                        <div className="wd-font-color" style={{fontSize: '12px'}}>{profile.tweet}</div>
                    </div>

                </div>
                <img height="180" src={profile.bannerPicture}/>
            </div>

            <Link to="/tuiter/editProfile" className="btn float-end mt-2 wd-rounded-corners bg-black wd-border-color-grey wd-bolded-font wd-font-white">
                Edit Profile</Link>

            <img className="wd-image-border wd-relative-position-profile wd-rounded-corners" height="100" width="100" src={profile.profilePicture}/>

            <h6 className="wd-relative-profile-name wd-profile-name-style wd-font-white">
                {profile.fullName}
            </h6>
            <text className="wd-relative-profile-handle wd-font-grey">{profile.handle}</text>


            <h6 className="wd-relative-profile-bio pb-2">{profile.bio}</h6>

            <div className="wd-relative-profile-icons pb-2">
                <i className="me-2 fa-solid fa-location-dot"></i>
                <text className="me-3">{profile.location}</text>

                <i className="me-2 fa-solid fa-comment-dots"></i>
                <text className="me-3">{profile.dob}</text>

                <i className="me-2 fa-regular fa-calendar-days"></i>
                <text className="me-3">{profile.dateJoined}</text>
            </div>


            <div className="wd-relative-profile-icons row">
                <text className="col-3 wd-font-white">
                    {profile.followingCount}
                    <span className="ms-1 wd-font-grey">Following</span>
                </text>

                <text className="col-9 wd-font-white">
                    {profile.followersCount}
                    <span className="ms-1 wd-font-grey">Followers</span>
                </text>
            </div>

        </>




    );
}
export default ProfileListItem;