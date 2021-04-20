import axios from 'axios';
import { FETCH_USERS_START, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from '../types/reducerTypes';

const fetchData = (query : string, per_page : number, page : number) => {
    console.log("lol");
    return (dispatch : any)  => {
        const url = `https://api.github.com/search/users?q=${query}+in:user&per_page=${per_page}&page=${page}`;
        axios
        .get(url)
        .then(response => {
            dispatch(fetchDataSuccess(response.data));
        })
        .catch(error => dispatch(fetchDataError(error.message)));
    }
}

const fetchDataStart = () => ({
    type: FETCH_USERS_START
})

const fetchDataSuccess = (data : object) => ({
    type: FETCH_USERS_SUCCESS,
    payload: {
        ...data
    }
});

const fetchDataError = (error : object) => ({
    type: FETCH_USERS_ERROR,
    payload: {
        error
    }
});

export default fetchData;