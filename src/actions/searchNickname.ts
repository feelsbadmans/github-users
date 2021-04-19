import axios from 'axios';
import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from '../types/reducerTypes';

export function fetchData() {
    return (dispatch : any)  => {
        dispatch(fetchDataStart());
        const url = "https://api.github.com/search/users?q=feelsbadm+in:user&per_page=10&page=1";
        axios
        .get(url)
        .then(response => {
            dispatch(fetchDataSuccess(response.data));
        })
        .catch(error => dispatch(fetchDataError(error.message)));
    }
}

const fetchDataStart = () => ({
    type: FETCH_DATA_START
})

const fetchDataSuccess = (data : object) => ({
    type: FETCH_DATA_SUCCESS,
    payload: {
        ...data
    }
});

const fetchDataError = (error : object) => ({
    type: FETCH_DATA_ERROR,
    payload: {
        error
    }
});