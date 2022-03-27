import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) =>{
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };

    return(
        <div className="pt-3 ms-2 row wd-inline-icon-text">

            <div className="col-3">
                <i className="wd-font-color fa-regular fa-comment"></i>
                <text className="wd-block-100 wd-font-color" >{tuit.stats.comments}</text>
            </div>


            <div className="col-3">
                <i className="wd-font-color fa-solid fa-retweet"></i>
                <text className="wd-block-100 wd-font-color">{tuit.stats.retuits}</text>
            </div>


            {/*<i className="wd-margin-12  wd-font-color fa-regular fa-heart"></i>*/}
            {/*<text className="wd-block-100 wd-font-color">{tuit.stats.likes}</text>*/}


            <div className="col-3" onClick={likeTuit}>
                {
                    tuit.liked &&
                    <i className="fas fa-heart me-1"
                       style={{color: 'red'}}></i>
                }
                {
                    !tuit.liked &&
                    <i className="far fa-heart me-1"></i>
                }
                {tuit.stats && tuit.stats.likes}
            </div>

            <div className="col-3">
                <i className="wd-font-color fa-solid fa-arrow-up-from-bracket"></i>
                <text className="wd-block-100 wd-font-color"></text>

            </div>


        </div>
    );
}
export default TuitStats;