import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import fetchUsers, { resetStoreUsers } from "../actions/actionsFetchUsers";
import { useTypedSelector } from "../hooks/hooks";
import HomeSuggestUser from "./HomeSuggestUser";



const HomeForm: React.FC = () => {
    const [username, setUsername] = useState("");
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const history = useHistory();
    const { users } = useTypedSelector(state => state.fetchUsersReducer);
    const dispatch = useDispatch();

    if (username === "") {
        dispatch(resetStoreUsers());
    }

    useEffect(() => {
        if (username !== "") dispatch(fetchUsers(username, 5, 1));
    }, [username, dispatch]);

    const escapePress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key.toLowerCase() === "escape") {
            inputRef.current?.blur();
        }
    }

    const enterPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key.toLowerCase() === "enter") {
            history.push(`/searchresult/${username}`);
        }
    };

    const onChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUsername(event.target.value)
    },[])

    return (
        <>
            <div className="form-container">
                <textarea 
                    ref={inputRef} 
                    value={username}
                    placeholder="Type here"
                    onChange={onChange} 
                    onKeyPress={enterPress}
                    onKeyUp={escapePress} 
                />
                {
                    username && (
                        <ul style={{height: "150px" }}>
                            {
                                users.items.map((el: any) => {
                                    return <HomeSuggestUser username={el.login} profileImage={el.avatar_url} api_url={el.url} />
                                })
                            }
                        </ul>
                    )
                }
            </div>
            <Link to={username ? `/searchresult/${username}` : '.'} className="search-button">
                Find
            </Link>
        </>
    );
}

export default HomeForm;