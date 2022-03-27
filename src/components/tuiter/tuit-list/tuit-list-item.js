import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";


    const TuitListItem = ({tuit}) =>{
        const dispatch = useDispatch();
        const deleteTuit = (tuit) => {
            dispatch({type: 'delete-tuit', tuit})
        };
        // const likeTuit = () => {
        //     dispatch({type: 'like-tuit', tuit});
        // };


        return(
            <div className="row">
                <div className="col-1">
                    <img className="wd-rounded-corners" height="50" width="50" src={tuit.image}/>
                </div>

                <div className="col-11">
                    <i onClick={() => deleteTuit(tuit)}
                       className="fas fa-remove fa-2x fa-pull-right"></i>

                    <li className="wd-postitem-style ms-3 wd-border-disappear">
                        <span className="wd-bolded-font">{tuit.postedBy.username}</span>
                        <i className="fa-solid fa-circle-check"></i>
                        <span className="wd-font-grey">
                            {tuit.handle}
                        </span>

                        <div className="mb-2">
                            {tuit.tuit}
                        </div>

                        <div className="wd-rounded-corners-small">
                            <div className="wd-rounded-corners-small">
                                {
                                tuit.attachments && tuit.attachments.image &&
                                <img className="wd-rounded-corners-small w-100 d-flex position-relative" src={tuit.attachments.image}/>
                                }

                                {tuit.attachments && tuit.attachments.video &&
                                <iframe className="wd-rounded-corners-small wd-video-dimension w-100 d-flex position-relative" src={`https://www.youtube.com/embed/${tuit.attachments.video}`}/>
                                }
                            </div>

                            {/*<div className="card-body ps-3 pe-3 pb-3 wd-bg-color-black wd-rounded-corners-small">*/}
                            {/*    <h6>{tuit.tuit}</h6>*/}
                            {/*    <div className="wd-font-grey">{tuit.tuit}</div>*/}
                            {/*</div>*/}
                        </div>

                    </li>

                    <TuitStats tuit={tuit}/>
                    {/*<div className="pt-3 ms-2 row wd-inline-icon-text">*/}

                    {/*    <div className="col-3">*/}
                    {/*        <i className="wd-font-color fa-regular fa-comment"></i>*/}
                    {/*        <text className="wd-block-100 wd-font-color" >{tuit.stats.comments}</text>*/}
                    {/*    </div>*/}


                    {/*    <div className="col-3">*/}
                    {/*        <i className="wd-font-color fa-solid fa-retweet"></i>*/}
                    {/*        <text className="wd-block-100 wd-font-color">{tuit.stats.retuits}</text>*/}
                    {/*    </div>*/}


                    {/*    /!*<i className="wd-margin-12  wd-font-color fa-regular fa-heart"></i>*!/*/}
                    {/*    /!*<text className="wd-block-100 wd-font-color">{tuit.stats.likes}</text>*!/*/}


                    {/*    <div className="col-3" onClick={likeTuit}>*/}
                    {/*        {*/}
                    {/*            tuit.liked &&*/}
                    {/*            <i className="fas fa-heart me-1"*/}
                    {/*               style={{color: 'red'}}></i>*/}
                    {/*        }*/}
                    {/*        {*/}
                    {/*            !tuit.liked &&*/}
                    {/*            <i className="far fa-heart me-1"></i>*/}
                    {/*        }*/}
                    {/*        {tuit.stats && tuit.stats.likes}*/}
                    {/*    </div>*/}

                    {/*    <div className="col-3">*/}
                    {/*        <i className="wd-font-color fa-solid fa-arrow-up-from-bracket"></i>*/}
                    {/*        <text className="wd-block-100 wd-font-color"></text>*/}

                    {/*    </div>*/}


                    {/*</div>*/}
                    <hr/>



                </div>

            </div>

    );
}
export default TuitListItem;