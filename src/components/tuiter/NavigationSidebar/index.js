import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ( {
                                active = 'explore'
                            }
    ) => {
    return(
        <>
            <div className="list-group">
                <Link to="/" className="list-group-item">
                    <i className="fab fa-twitter"></i>
                </Link>


                <Link to="/tuiter/home" className={`list-group-item list-group-item-action ${active === 'Home' ? 'active' : ""}`}>
                    <i className="fa-solid fa-house-chimney-user"></i>
                    <span className="ms-2 d-none d-xl-inline-block">Home</span>
                </Link>


                <Link to="/tuiter/explore" className={`list-group-item list-group-item-action ${active === 'Explore' ? 'active' : ''}`}>
                    <i className="fa-solid fa-hashtag"></i>
                    <span className="ms-2 d-none d-xl-inline-block">Explore</span>
                </Link>


                <Link to="#" className="list-group-item list-group-item-action">
                    <i className="fa-solid fa-regular fa-bell"></i>
                    <span className="ms-2 d-none d-xl-inline-block">Notification</span>
                </Link>


                <Link to="#" className="list-group-item list-group-item-action">
                    <i className="fa-solid fa-regular fa-envelope"></i>
                    <span className="ms-2 d-none d-xl-inline-block">Message</span>
                </Link>


                <Link to="#" className="list-group-item list-group-item-action">
                    <i className="fa-solid fa-regular fa-bookmark"></i>
                    <span className="ms-2 d-none d-xl-inline-block">Bookmarks</span>
                </Link>


                <Link to="#" className="list-group-item list-group-item-action">
                        <i className="fa-solid fa-list"></i>
                        <span className="ms-2 d-none d-xl-inline-block">Lists</span>
                </Link>


                <Link to="/tuiter/profile" className={`list-group-item list-group-item-action ${active === 'Profile' ? 'active' : ''}`}>
                        <i className="fa-solid fa-user"></i>
                        <span className="ms-2 d-none d-xl-inline-block">Profile</span>
                </Link>


                <Link to="#" className="list-group-item list-group-item-action">
                    <i className="fa-solid fa-caret-down"></i>
                    <span className="ms-2 d-none d-xl-inline-block">More</span>
                </Link>
            
            </div>
   
            <div className="d-grid mt-2">
                <Link to="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</Link>
            </div>
        </>
    );
}
export default NavigationSidebar;
