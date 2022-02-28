const PostSummaryItem = (post) => {
    return(`
        <ul class="list-group list-group-flush">
        
        <li style="color: white" class="wd-bg-color-black list-group-item">
            <span style="color: darkgray">${post.topic}</span><br>
            <img class="float-end rounded" height="80" width="80" src="${post.image}"/>
            ${post.userName}
            <i class="fa-solid fa-circle-check"></i>
            <span style="color: darkgray">${post.time}</span>
            <text>
                <br>${post.title}
            </text>
        </li>
    `)
}
export default PostSummaryItem;