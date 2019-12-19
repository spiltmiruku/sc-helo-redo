const initialState = {
        username: '',
        id: '',
        profile_pic: ''
    
}

const GET_USER = 'GET_USER';
// const GET_POST = 'GET_POST';

export function getUser(username, id, profile_pic){
    return {
        type: GET_USER,
        payload: {username, id, profile_pic}
    }
}

// export function getPost(postId){
//     return {
//         type: GET_POST,
//         payload: {postId}
//     }
// }

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_USER:
            // console.log(action.payload)
            return {...state, 
                    username: payload.username, 
                    id: payload.id,
                    profile_pic: payload.profile_pic}
        // case GET_POST:
        //     return {
        //         ...state,
        //         postId: payload.postId
        //     }
        default:
            return state;
    }
}


