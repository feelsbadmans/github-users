import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import fetchData from "../actions/searchUser";
import { useTypedSelector } from "../hooks/hooks";
import { location } from "../types/interfaces";

//Пропсы: результаты поиска, 
const SearchResult : React.FC = () => {
    const dispatch = useDispatch();
    let location = useLocation<location>();
    const { users, loading, error} = useTypedSelector(state => state.fetchDataReducer);
    useEffect(() => {
        dispatch(fetchData(location.state.query));
    }, []);
    console.log(users.items);
    return (
        <div className="container">
            <Link to="/">
                <img className="image" src="/images/back_arrow_light.png"/>
            </Link>
            <h1>456</h1>
            <Link to="/userpage">
                <h1>boba</h1>
            </Link>
        </div>
    );
}

export default SearchResult;