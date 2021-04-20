import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import fetchData from "../actions/searchUser";
import { useTypedSelector } from "../hooks/hooks";


const HomeContent : React.FC = () => {
    const [username, setUsername] = useState("");
    const textareaRef = useRef(null);
    const dispatch = useDispatch();
    const { users} = useTypedSelector(state => state.fetchUsersReducer);
    useEffect(() => {
        if (username != "") dispatch(fetchData(username, 10, 1));
        // dispatch(fetchData(username, 10, 1));
    }, [username]);
    console.log(users.total_count);
    
    return (
        <>
            <div className="home-content">
                    <img  src="/images/github.png"/>
                    <h1>Find GitHub User</h1>
            </div>
            <div className="home-content">
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <Link to={ username != "" ? {pathname:"/searchresult", state: {query: username}} : {state : {error: "EmptyQuery"}}}>
                    <h1>boba</h1>
                </Link>
            </div>
        </>
    );
}

export default HomeContent;