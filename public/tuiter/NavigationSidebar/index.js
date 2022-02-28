const NavigationSidebar = (active) => {
    return(`
            <div class="wd-bg-color-black list-group">
                <a class="wd-bg-color-black list-group-item" href="/">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="../HomeScreen/challenge.html" class="wd-bg-color-black list-group-item ${active === 'Home' ? 'active' : ''}">
                    <div class="wd-inline-icon-text">
                        <i style="color: white" class="fa-solid fa-house-chimney-user"></i>
                        <span style="color: white" class="ms-2 d-none d-xl-block">Home</span>
                    </div>
                </a>
                <a href="../ExploreScreen/explore.html" class="wd-bg-color-black list-group-item ${active === 'Explore' ? 'active' : ''}">
                    <div class="wd-inline-icon-text">
                        <i style="color: white" class="fa-solid fa-hashtag"></i>
                        <span style="color: white" class="ms-2 d-none d-xl-block">Explore</span>
                    </div>
                </a>
                <a href="#" class="wd-bg-color-black list-group-item ${active === 'Notification' ? 'active' : ''}">
                    <div class="wd-inline-icon-text">
                        <i style="color: white" class="fa-regular fa-bell"></i>
                        <span style="color: white" class="ms-2 d-none d-xl-block">Notification</span>
                    </div>
                </a>

                <a href="#" class="wd-bg-color-black list-group-item ${active === 'Message' ? 'active' : ''}">
                    <div class="wd-inline-icon-text">
                        <i style="color: white" class="fa-regular fa-envelope"></i>
                        <span style="color: white" class="ms-2 d-none d-xl-block">Message</span>
                    </div>
                </a>

                <a href="#" class="wd-bg-color-black list-group-item ${active === 'Bookmarks' ? 'active' : ''}">
                    <div class="wd-inline-icon-text">
                    <i style="color:white;" class="fa-regular fa-bookmark"></i>
                    <span style="color: white" class="ms-2 d-none d-xl-block">Bookmarks</span>
                    </div>
                </a>


                <a href="#" class="wd-bg-color-black list-group-item ${active === 'Lists' ? 'active' : ''}">
                    <div class="wd-inline-icon-text">
                        <i style="color: white" class="fa-solid fa-list"></i>
                        <span style="color: white" class="ms-2 d-none d-xl-block">Lists</span>
                    </div>
                </a>

                <a href="#" class="wd-bg-color-black list-group-item ${active === 'Profile' ? 'active' : ''}">
                    <div class="wd-inline-icon-text">
                        <i style="color: white" class="fa-solid fa-user"></i>
                        <span style="color: white" class="ms-2 d-none d-xl-block">Profile</span>
                    </div>
                </a>
                <a href="#" class="wd-bg-color-black list-group-item ${active === 'More' ? 'active' : ''}">
                    <div class="wd-inline-icon-text">
                                <i style="color: white" class="fas fa-regular fa-circle wd-more-tab"></i>
                                <i style="color: black" class="fas fa-solid fa-ellipsis wd-more-tab"></i>
                                <span style="color: white" class="ms-4 d-none d-xl-block">More</span>
                    </div>
                </a>
            
            </div>
   
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
            
    `);
}
export default NavigationSidebar;
