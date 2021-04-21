import { FETCH_USERS_START, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR, FETCH_USERS_DEFAULT } from "../types/reducerTypes";

const initialState = {
    loading: true,
    users: {
        incomplete_results: false,
        items: [],
        total_count: 0
    },
    error: null
};


const fetchUsersReducer = (state = initialState, action : any) => {
    switch(action.type){
        case FETCH_USERS_START:
            return {
                ...state,
                loading:true,
                error: null
            };
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                loading:false,
                error: null,
                users: action.payload
            }
        case FETCH_USERS_ERROR:
            return{
                ...state,
                loading:false,
                error: action.payload.error
            }
        case FETCH_USERS_DEFAULT:
            return initialState;
        default:
            return state;
    }
}

export default fetchUsersReducer;
