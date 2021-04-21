import React, { } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { resetStore } from "../actions/actionsFetchUsers";
import SearchResultContent from "../components/SearchResultContent";
import { location } from "../types/interfaces";

//Пропсы: результаты поиска, 
const SearchResult : React.FC = () => {
    let location = useLocation<location>();
    const dispatch = useDispatch();
    dispatch(resetStore());

    return (
        <div className="page-container">
            <SearchResultContent username={location.state.query}></SearchResultContent>
        </div>
    );
}

export default SearchResult;