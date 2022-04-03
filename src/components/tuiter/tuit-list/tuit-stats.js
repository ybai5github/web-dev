import {useDispatch} from "react-redux";
import {updateTuit} from "../actions/tuits-action";

const TuitStats = ({tuit}) =>{
    const dispatch = useDispatch();

    const likeTuit = () => {
        updateTuit(dispatch, tuit, 'thumb-up-tuit');
    };
    const dislikeTuit = () => {
        updateTuit(dispatch, tuit, 'thumb-down-tuit');
    };

    return(

        <div className="pt-3 ms-2 row wd-inline-icon-text">

            <div className="col-3">
                likes: {tuit.likes}
            </div>
            <div className="col-3">
                {
                    tuit.liked && <i onClick={likeTuit} className="far fa-thumbs-up" style={{color: 'red'}}></i>
                }
                {
                    !tuit.liked && <i onClick={likeTuit} className="far fa-thumbs-up"></i>
                }

            </div>


            <div className="col-3">
                dislikes: {tuit.dislikes}
            </div>
            <div className="col-3">
                {
                    tuit.disliked && <i onClick={dislikeTuit} className="far fa-thumbs-down"style={{color: 'red'}}></i>
                }
                {
                    !tuit.disliked && <i onClick={dislikeTuit} className="far fa-thumbs-down"></i>
                }
            </div>


            {/*<i onClick={()=> updateTuit(dispatch, {...tuit, likes: tuit.likes+1})}*/}
            {/*className="far fa-thumbs-up"></i>*/}

            {/*<div className="col-3">*/}
            {/*    <i onClick={()=> updateTuit(dispatch, {...tuit, likes: tuit.likes-1})}*/}
            {/*       className="far fa-thumbs-down"></i>*/}
            {/*</div>*/}



            {/*<div className="col-3" onClick={likeTuit}>*/}
            {/*    {*/}
            {/*        tuit.liked &&*/}
            {/*        <i className="fas fa-heart me-1"*/}
            {/*           style={{color: 'red'}}></i>*/}
            {/*    }*/}
            {/*    {*/}
            {/*        !tuit.liked &&*/}
            {/*        <i className="far fa-heart me-1"></i>*/}
            {/*    }*/}
            {/*    {tuit.stats && tuit.stats.likes}*/}
            {/*</div>*/}

            {/*<div className="col-3">*/}
            {/*    <i className="wd-font-color fa-solid fa-arrow-up-from-bracket"></i>*/}
            {/*    <text className="wd-block-100 wd-font-color"></text>*/}

            {/*</div>*/}


        </div>
    );
}
export default TuitStats;
