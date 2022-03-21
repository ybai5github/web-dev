
const PostItem = ({
                      posts= {"like": "37.5k",
                      "retuit": "3.5k",
                      "comment": "4.2k",
                      "profilePic": "/images/starship.jpeg",
                      "userName":"Elon Musk",
                      "handle": "@elonmusk · 23h",
                      "title":"Amazing show about mission!",
                      "image":"/images/inspiration4.jpeg",
                      "cardTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                      "cardText": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space"
                      }
                }
) => {
    return(
            <>
            <div className="wd-inline">
                <div>
                    <img className="float-start wd-rounded-corners" height="50" width="50" src={posts.profilePic}/>
                </div>
                <div>
                    <li className="wd-postitem-style ms-3 wd-bg-color-black wd-border-disappear">
                        <span className="wd-bolded-font">{posts.userName}</span>
                        <i className="fa-solid fa-circle-check"></i>
                        <span className="wd-font-grey">
                            {posts.handle}
                        </span>

                        <div className="mb-2">
                            {posts.title}
                        </div>

                        <div className="wd-rounded-corners-small wd-bg-color-black wd-border_color_black">
                            <div className="wd-rounded-corners-small">
                                <img className="wd-rounded-corners-small w-100 d-flex position-relative" src={posts.image}/>
                            </div>

                            <div className="card-body ps-3 pe-3 pb-3 wd-bg-color-black wd-rounded-corners-small">
                                <h6>{posts.cardTitle}</h6>
                                <div className="wd-font-grey">{posts.cardText}</div>
                            </div>
                        </div>

                    </li>



                    <div className="wd-margin-to-top-12 wd-row wd-inline-icon-text">

                            <i className="wd-margin-12 wd-font-color fa-regular fa-comment"></i>
                            <text className="wd-block-100 wd-font-color" >{posts.comment}</text>

                            <i className="wd-margin-12 wd-font-color fa-solid fa-retweet"></i>
                            <text className="wd-block-100 wd-font-color">{posts.retuit}</text>

                            <i className="wd-margin-12  wd-font-color fa-regular fa-heart"></i>
                            <text className="wd-block-100 wd-font-color">{posts.like}</text>

                            <i className="wd-margin-12 wd-font-color fa-solid fa-arrow-up-from-bracket"></i>
                            <text className="wd-block-100 wd-font-color"></text>

                    </div>
                    <hr/>



                </div>

            </div>
            </>
    );
}
export default PostItem;