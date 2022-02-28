const PostItem = (posts) => {
    return(`
    <div class="wd-inline">
        <div>
            <img class="float-start wd-rounded-corners" height="50" width="50" src="${posts.profilePic}"/>
        </div>
        <div>
            <li style="color: white; list-style: none" class="ms-3 wd-bg-color-black wd-border-disappear">
                <span class="wd-bolded-font" style="color: white">${posts.userName}</span>
                <i class="fa-solid fa-circle-check"></i>
                <span style="color: darkgray">
                    ${posts.handle}
                </span><br>
                <div class="mb-2">
                    ${posts.title}
                </div>
    
                <div class="wd-rounded-corners-small wd-bg-color-black wd-border_color_black">
                    <div class="wd-rounded-corners-small">
                        <img class="wd-rounded-corners-small w-100 d-flex position-relative" src="${posts.image}"/>
                    </div>
                   
                    <div style="display: ${posts.cardTitle === '' ? 'none': 'block'}" class="card-body ps-3 pe-3 pb-3 wd-bg-color-black wd-rounded-corners-small">
                        <h6>${posts.cardTitle}</h6>
                        <div style="color: darkgray">${posts.cardText}</div>
                    </div>
                </div>
               
            </li>
            
            
            
            <div class="wd-margin-to-top-12 wd-row wd-inline-icon-text">

                    <i class="wd-margin-12 wd-font-color fa-regular fa-comment"></i>
                    <text class="wd-block-100 wd-font-color" >${posts.comment}</text>

                    <i class="wd-margin-12 wd-font-color fa-solid fa-retweet"></i>
                    <text class="wd-block-100 wd-font-color">${posts.retuit}</text>
          
                    <i class="wd-margin-12  wd-font-color fa-regular fa-heart"></i>
                    <text class="wd-block-100 wd-font-color">${posts.like}</text>
    
                    <i class="wd-margin-12 wd-font-color fa-solid fa-arrow-up-from-bracket"></i>
                    <text class="wd-block-100 wd-font-color"></text>
           
            </div>
            <hr>

        </div>
        
    </div>


        
    `)
}
export default PostItem;