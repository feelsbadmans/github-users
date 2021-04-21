import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import fetchUsers, { resetStore } from "../actions/actionsFetchUsers";
import { useTypedSelector, useWindowHeight } from "../hooks/hooks";
import { propsSearchResult } from "../types/interfaces";
import SearchResultUser from "./SearchResultUser";

const getPerPage = (height: number) => {
    if (height > 800) return 10;
    if (height > 600) return 8;
    return 6;
}

const getArrayPages = (pagesCount: number, currentPage: number) => {
    let pages = [];
    if (pagesCount > 10) {
        if (currentPage > 5) {
            if (currentPage > pagesCount - 5) {
                for (let i = pagesCount - 9; i <= pagesCount; i++) pages.push(i);
            }
            else {
                for (let i = currentPage - 4; i <= currentPage + 5; i++) pages.push(i);
            }
        }
        else {
            for (let i = 1; i <= 10; i++) pages.push(i);
        }
    }
    else {
        for (let i = 1; i <= pagesCount; i++) pages.push(i);
    }
    return pages;
}

const SearchResultContent: React.FC<propsSearchResult> = (props: propsSearchResult) => {
    const dispatch = useDispatch();
    const { users, loading, error } = useTypedSelector(state => state.fetchUsersReducer);

    const height: number = useWindowHeight();
    const [perPage, setPerPage] = useState<number>(10);
    const [currentPage, setCurrentPage] = useState<number>(1);
    let pagesCount = Math.ceil(users.total_count / perPage);
    let pages: Array<number> = getArrayPages(pagesCount, currentPage);
    useEffect(() => {
        setPerPage(getPerPage(height));
        pagesCount = Math.ceil(users.total_count / perPage);
        pages = getArrayPages(pagesCount, currentPage);
        if (props.username != "") dispatch(fetchUsers(props.username, perPage, currentPage));
    }, [getPerPage(height)])

    useEffect(() => {
        console.log("didiwin?");
        console.log(pages, pagesCount);
        pages = getArrayPages(pagesCount, currentPage);
        if (props.username != "") dispatch(fetchUsers(props.username, perPage, currentPage));
    }, [currentPage])


    if (error) {
        return (
            <>
                <Link to="/">
                    <div className="button-container">
                        <img className="image" src="/images/back_arrow_light.png" />
                    </div>
                </Link>
                <h1>Error: {error}</h1>
            </>
        );
    }

    if (props.username === "") {
        return (
            <>
                <Link to="/">
                    <div className="button-container">
                        <img className="image" src="/images/back_arrow_light.png" />
                    </div>
                </Link>
                <h1>Oops... I can't find user with no nickname...</h1>
            </>
        );

    }

    if (users.total_count === 0 && !loading) {
        return (
            <>
                <Link to="/">
                    <div className="button-container">
                        <img className="image" src="/images/back_arrow_light.png" />
                    </div>
                </Link>
                <h1>I couldn't find any users with nickname '{props.username}'</h1>
            </>
        );
    }

    if (loading) {
        return (
            <>
                <Link to="/">
                    <div className="button-container">  
                        <img className="image" src="/images/back_arrow_light.png"/>
                    </div>
                </Link>
            </>
        );
    }

    return (
        <>
            <Link to="/">
                <div className="button-container">
                    <img className="image" src="/images/back_arrow_light.png" />
                </div>
            </Link>
            <h1>Searching result</h1>
            <div className="search-result-content">
                {
                    users.items.map((el: any) => {
                        return <SearchResultUser
                            username={el.login}
                            profileImage={el.avatar_url}
                            api_url={el.url}
                        />
                    })
                }
            </div>
            <div className="paginator">
                {
                    pages.map((page: number, index: number) =>
                        <span
                            className={page === currentPage ? "current-page" : "page"}
                            onClick={() => { setCurrentPage(page) }}>{page}</span>
                    )
                }
            </div>
        </>
    );
}

export default SearchResultContent;