import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from "../types/reducerTypes";

const initialState = {
    loading: false,
    users: {
        incomplete_results: false,
        items: [],
        total_count: 0
    },
    error: null
};

const fetchDataReducer = (state = initialState, action : any) => {
    switch(action.type){
        case FETCH_DATA_START:
            return {
                ...state,
                loading:true,
                error: null
            };
        case FETCH_DATA_SUCCESS:
            return{
                ...state,
                loading:false,
                error: null,
                users: action.payload
            }
        case FETCH_DATA_ERROR:
            return{
                ...state,
                loading:false,
                error: action.payload.error
            }
        default:
            return state;
    }
}

export default fetchDataReducer;
