import { FETCH_USERS_START, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from "../types/reducerTypes";

const initialState = {
    loading: false,
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
        default:
            return state;
    }
}

export default fetchUsersReducer;
