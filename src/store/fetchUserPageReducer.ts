import { FETCH_USER_PAGE_START, FETCH_USER_PAGE_DEFAULT, FETCH_USER_PAGE_ERROR, FETCH_USER_PAGE_SUCCESS } from "../types/reducerTypes";

const initialState = {
    loading: true,
    user: {
        login: "",
        avatar_url: "",
        html_url: "",
        name: "",
        company: "",
        location: "",
        email: "",
        public_repos: 0,
        followers: 0,
        following: 0,
        created_at: "",
        updated_at: ""
    },
    error: null
};


const fetchUserPageReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_USER_PAGE_START:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_USER_PAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                user: action.payload
            }
        case FETCH_USER_PAGE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case FETCH_USER_PAGE_DEFAULT:
            return initialState;
        default:
            return state;
    }
}

export default fetchUserPageReducer;
