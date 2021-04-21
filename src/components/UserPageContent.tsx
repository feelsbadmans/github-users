import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import fetchUserPage from "../actions/actionsFetchUserPage";
import { useTypedSelector } from "../hooks/hooks";
import { propsUser } from "../types/interfaces";

const UserPageContent: React.FC<propsUser> = (props: propsUser) => {
    console.log(props.user_api_url);
    let history = useHistory();
    const goBack = () => {
        history.goBack();
    };
    const dispatch = useDispatch();
    const { user, loading } = useTypedSelector(state => state.fetchUserPageReducer);
    useEffect(() => {
        dispatch(fetchUserPage(props.user_api_url));
    }, []);
    console.log(user);
    if (loading) {
        return (
            <>
                <button className="button-container" onClick={goBack} title="Go back">
                    <img className="image" src="/images/back_arrow_light.png" />
                </button>
                <h1>Loading...</h1>
            </>
        );
    }

    return (
        <>
            <button className="button-container" onClick={goBack} title="Go back">
                <img className="image" src="/images/back_arrow_light.png" />
            </button>
            <div className="user-page-content">
                <div className="user-page-item-row">
                    <div className="user-page-item-column">
                        <img className="user-image" src={user.avatar_url} />
                        <a href={user.html_url} target="_blank" title="Open in GitHub">
                            <h1>{user.login}</h1>
                        </a>
                        <h3>{user.name}</h3>
                        <p>{user.location}</p>
                        <p>{user.email}</p>
                        <p>{user.company}</p>
                    </div>
                    <div className="user-page-item-column" style={{ alignItems: "baseline" }}>
                        <p>Repositories: {user.public_repos}</p>
                        <p>Followers: {user.followers}</p>
                        <p>Following: {user.following}</p>
                        <p>Created: {user.created_at.slice(0, 10) + " at " + user.created_at.slice(11, 19)}</p>
                        <p>Last Update: {user.updated_at.slice(0, 10) + " at " + user.updated_at.slice(11, 19)}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserPageContent;