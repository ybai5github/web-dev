const PostSummaryItem = ({
                             post = {
                                 "topic": "Web Development",
                                 "userName": "ReactJS",
                                 "time": "2h",
                                 "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                 "image": "/images/React-icon.png"
                             }
                         }
) => {
    return(
        <div>
            <ul className="list-group list-group-flush">

                <li className="wd-bg-color-black list-group-item">
                    <span className="wd-font-grey">{post.topic}</span><br/>
                    <img className="float-end rounded" height="80" width="80" src={post.image}/>
                    {post.userName}
                    <i className="fa-solid fa-circle-check"></i>
                    <span className="wd-font-grey">{post.time}</span><br/>
                    <text>
                        {post.title}
                    </text>
                </li>

            </ul>
        </div>
    );
}
export default PostSummaryItem;