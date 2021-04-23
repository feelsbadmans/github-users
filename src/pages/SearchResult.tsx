import React, { } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { resetStoreUsers } from "../actions/actionsFetchUsers";
import SearchResultContent from "../components/SearchResultContent";
import { locationSearchResult } from "../types/interfaces";

//Пропсы: результаты поиска, 
const SearchResult : React.FC = () => {
    let location = useLocation<locationSearchResult>();
    const dispatch = useDispatch();
    dispatch(resetStoreUsers());

    return (
        <div className="page-container">
            <SearchResultContent username={location.state.query}></SearchResultContent>
        </div>
    );
}

export default SearchResult;