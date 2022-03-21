import React from "react";
import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(
        <>
            <div className="row">
               <div className='input-group mb-2'>
                    <div className="wd-inline-icon-text">
                        <i className="position-absolute ms-3 fa-solid fa-magnifying-glass"></i>
                        <input size={120} className='wd-padding-input me-5 wd-searchbar-border form-control' type='text' name='search' placeholder='Search Twitter' />
                        <i className="wd-gearicon-color fa-solid fa-gear float-end fa-2x"></i>
                    </div>
               </div>
            </div>


           <ul className="nav mb-2 nav-tabs">

                <li className="bg-dark nav-item">
                    <a className="nav-link active" href="#">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sports</a>
                </li>
                <li className="nav-item d-none d-md-block">
                    <a className="nav-link" href="#">Entertainment</a>
                </li>

           </ul>



               <div className="d-flex position-relative">
                    <img className="w-100" src="/images/starship.jpeg"/>
                    <h2 className="position-absolute bottom-0">&nbsp;SpaceX's Starship</h2>
               </div>

               <PostSummaryList/>
        </>
    );
}
export default ExploreComponent;
