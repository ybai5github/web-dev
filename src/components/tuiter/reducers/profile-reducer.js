import profileData from "../data/profileData.json"

const profileReducer = (state = profileData, action)=>{
    switch (action.type) {
        case 'save':
            //console.log(action.profile)
            state[0] = {
                ...state[0],
                ...action.profile[0],
            }
            return state;
        default:
            return state;
    }
}

export default profileReducer;
