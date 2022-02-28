const WhoToFollowListItem = (who) => {
    return(`
        <ul class="list-group list-group-flush">
           
            
            <li style="color: white" class="wd-bg-color-black list-group-item my-auto">
                <button type="button" class="btn btn-primary wd-vertical-align-button wd-rounded-corners float-end">Follow</button>
                <img class="wd-rounded-corners float-start" width="45" height="45" src="${who.avatarIcon}"/>
                ${who.userName}
                <i class="fa-solid fa-circle-check"></i>
                <text>
                    <br>@ ${who.handle}
                </text>
            </li>
            
        </ul>
    `)
}
export default WhoToFollowListItem;