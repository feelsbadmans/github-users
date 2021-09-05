import React from "react";
import { Link } from "react-router-dom";
import { propsSuggestUser } from "../types/interfaces";

const SearchResultUser: React.FC<propsSuggestUser> = (props: propsSuggestUser) => {
    return (
        <Link to={`/userpage/${props.username}`} className="search-result-item">
            <img src={props.profileImage} className="search-result-image"></img>
            <span>{props.username}</span>
        </Link>
    );
}

export default SearchResultUser;