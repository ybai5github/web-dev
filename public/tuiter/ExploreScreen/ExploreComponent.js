import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
               <!-- search field and cog -->
               <div class='input-group mb-2'>
                    <div class="wd-inline-icon-text">
                        <i style="color: gray" class="position-absolute ms-3 fa-solid fa-magnifying-glass"></i>
                        <input size="100%" class='wd-padding-input me-5 wd-searchbar-border form-control' type='text' name='search' placeholder='Search Twitter' />
                        <i class=" fa-solid fa-gear float-end fa-2x" style="color: #2a9fd6"></i>
                    </div>
               </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
                <ul class="nav nav-tabs mb-2">
                <li class="bg-dark nav-item">
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
           </ul>
           <!-- image with overlaid text -->
           <div class="d-flex position-relative">
                <img class="w-100" src="../../labs/a4/starship.jpeg">
                <h2 style="color:white" class="position-absolute bottom-0">&nbsp;SpaceX's Starship</h2>
           </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
