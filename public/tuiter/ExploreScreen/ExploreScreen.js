import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="wd-bg-color-black container-fluid mt-2 mb-2">
            <div class="row mt-2">
                <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                    ${NavigationSidebar('Explore')}
                </div>
                
                
                <div class="col-sm-10 col-md-10 col-lg-7 col-xl-6">
                    ${ExploreComponent()}
                </div>
                
                
                <div class="wd-bg-color-black d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    ${WhoToFollowList()}
                </div>
                
                <div>
                
                </div>
                
            </div>
        </div>
       
    `);
})($);
