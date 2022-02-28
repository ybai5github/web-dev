import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";
import HomeScreenComponent from "./HomeScreenComponent.js";
import PostSummaryList from "../PostSummaryList";

(function ($) {
    $('#wd-explore').append(`
        <div class="wd-bg-color-black container-fluid mt-2 mb-2">
            <div class="row mt-4">
                <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                    ${NavigationSidebar('Home')}
                </div>
                
                
                <div class="col-sm-10 col-md-10 col-lg-7 col-xl-6">
                    ${HomeScreenComponent()}
                </div>
                
                
                <div class="wd-bg-color-black d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                     ${PostSummaryList()}
                </div>
            </div>
        </div>
       
    `);
})($);
