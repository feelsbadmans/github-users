import axios from 'axios';
import { FETCH_USERS_SUCCESS, FETCH_USERS_ERROR, FETCH_USERS_DEFAULT, FETCH_USERS_START } from '../types/reducerTypes';

const fetchUsers = (query: string, per_page: number, page: number) => {
    return (dispatch: any) => {
        dispatch(fetchUsersStart());
        const url = `https://api.github.com/search/users?q=${query}+in:user&per_page=${per_page}&page=${page}&access_token=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`;
        axios
            .get(url)
            .then(response => {
                dispatch(fetchUsersSuccess(response.data));
            })
            .catch(error => dispatch(fetchUsersError(error.message)));
    }
}

export const resetStoreUsers = () => ({
    type: FETCH_USERS_DEFAULT
})

const fetchUsersStart = () => ({
    type: FETCH_USERS_START
})

const fetchUsersSuccess = (data: object) => ({
    type: FETCH_USERS_SUCCESS,
    payload: {
        ...data
    }
});

const fetchUsersError = (error: object) => ({
    type: FETCH_USERS_ERROR,
    payload: {
        error
    }
});

export default fetchUsers;