import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import fetchData from "../actions/searchUser";
import { useTypedSelector } from "../hooks/hooks";


const SearchResultContent : React.FC = () => {
    let location = useLocation();
    const [username, setUsername] = useState("");
    const textareaRef = useRef(null);
    const dispatch = useDispatch();
    console.log(location);
    const { users} = useTypedSelector(state => state.fetchUsersReducer);
    useEffect(() => {
        if (username != "") dispatch(fetchData(username, 10, 1));
        // dispatch(fetchData(username, 10, 1));
    }, [username]);
    console.log(users.total_count);
    
    return (
        <>
            <Link to="/">
                <div className="button-container">  
                    <img className="image" src="/images/back_arrow_light.png"/>
                </div>
            </Link>
            <Link to="/userpage">
                <h1>boba</h1>
            </Link>
        </>
    );
}

export default SearchResultContent;