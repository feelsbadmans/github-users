import React from "react";
import { Link } from "react-router-dom";
import { propsSuggestUser } from "../types/interfaces";

const HomeSuggestUser: React.FC<propsSuggestUser> = (props: propsSuggestUser) => {
    return (
        <Link to={{ pathname: "/userpage", state: { api_url: props.api_url } }} className="suggest-container">
            <img src={props.profileImage} className="suggest-image"></img>
            <span>{props.username}</span>
        </Link>
    );
}

export default HomeSuggestUser;