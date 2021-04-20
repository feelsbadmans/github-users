import React, { useEffect, useState } from "react";
import SearchResultContent from "../components/SearchResultContent";

//Пропсы: результаты поиска, 
const SearchResult : React.FC = () => {
    return (
        <div className="page-container">
            <SearchResultContent></SearchResultContent>
        </div>
    );
}

export default SearchResult;