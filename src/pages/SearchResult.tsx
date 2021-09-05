import React, { } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { resetStoreUsers } from "../actions/actionsFetchUsers";
import SearchResultContent from "../components/SearchResultContent";

//Пропсы: результаты поиска, 
const SearchResult : React.FC = () => {
    const { username } = useParams<{username: string}>();

    const dispatch = useDispatch();
    dispatch(resetStoreUsers());

    return (
        <div className="page-container">
            <SearchResultContent username={username}></SearchResultContent>
        </div>
    );
}

export default SearchResult;