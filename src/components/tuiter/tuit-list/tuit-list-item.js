import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";
import {deleteTuit} from "../actions/tuits-action"

    const TuitListItem = ({tuit}) =>{
        const dispatch = useDispatch();


        return(

            <div className="row">

                <div className="col-1">
                    <img className="wd-rounded-corners" height="50" width="50" src={tuit.image}/>
                </div>

                <div className="col-11">
                    <i className="fas fa-remove float-end"
                       onClick={() => deleteTuit(dispatch, tuit)}></i>

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


                        </div>

                    </li>

                    <TuitStats tuit={tuit}/>

                    <hr/>



                </div>

            </div>

    );
}
export default TuitListItem;