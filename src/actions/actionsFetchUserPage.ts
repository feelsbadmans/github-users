import axios from 'axios';
import { FETCH_USER_PAGE_DEFAULT, FETCH_USER_PAGE_ERROR, FETCH_USER_PAGE_START, FETCH_USER_PAGE_SUCCESS } from '../types/reducerTypes';

const fetchUserPage = (url: string) => {
    return (dispatch: any) => {
        dispatch(fetchUserPageStart());
        axios
            .get(url)
            .then(response => {
                dispatch(fetchUserPageSuccess(response.data));
            })
            .catch(error => dispatch(fetchUserPageError(error.message)));
    }
}

export const resetStoreUserPage = () => ({
    type: FETCH_USER_PAGE_DEFAULT
})

const fetchUserPageStart = () => ({
    type: FETCH_USER_PAGE_START
})

const fetchUserPageSuccess = (data: object) => ({
    type: FETCH_USER_PAGE_SUCCESS,
    payload: {
        ...data
    }
});

const fetchUserPageError = (error: object) => ({
    type: FETCH_USER_PAGE_ERROR,
    payload: {
        error
    }
});

export default fetchUserPage;