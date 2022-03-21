const WhoToFollowListItem = ({
                                 who = {
                                     avatarIcon : '/images/nasa.png',
                                     userName: 'NASA',
                                     handle: 'NASA',
                                 }
                             }
) => {
    return(
        <div>

            <ul className="list-group list-group-flush">
                <li className="wd-bg-color-black list-group-item my-auto">

                    <button type="button" className="btn btn-primary wd-vertical-align-button wd-rounded-corners float-end">Follow</button>
                    <img className="wd-rounded-corners float-start" width="45" height="45" src={who.avatarIcon}/>
                    {who.userName}
                    <i className="fa-solid fa-circle-check"></i>
                    <div>@{who.handle}</div>

                </li>

            </ul>
        </div>
    );
}
export default WhoToFollowListItem;