import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import fetchUserPage from "../actions/actionsFetchUserPage";
import { useTypedSelector } from "../hooks/hooks";
import { propsUser } from "../types/interfaces";

const UserPageContent: React.FC<propsUser> = (props: propsUser) => {
    let history = useHistory();
    const goBack = () => {
        history.goBack();
    };
    
    const dispatch = useDispatch();
    const { user, loading } = useTypedSelector(state => state.fetchUserPageReducer);
    useEffect(() => {
        dispatch(fetchUserPage(props.user_api_url));
    }, []);

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
                    <div className="user-page-item-column" style={{ textAlign: "center" }}>
                        <img className="user-image" src={user.avatar_url} />
                        <h1>{user.login}</h1>
                        <h3>{user.name}</h3>
                        <h5>{user.location}</h5>
                        <h5>{user.email}</h5>
                        <h6>{user.company}</h6>
                    </div>
                    <div className="user-page-item-column" style={{ alignItems: "baseline" }}>
                        <p>Repositories: {user.public_repos}</p>
                        <p>Followers: {user.followers}</p>
                        <p>Following: {user.following}</p>
                        <p>Created: {user.created_at.slice(0, 10) + " at " + user.created_at.slice(11, 19)}</p>
                        <p>Last Update: {user.updated_at.slice(0, 10) + " at " + user.updated_at.slice(11, 19)}</p>
                        <a href={user.html_url} target="_blank" title="Open in GitHub">
                            <img className="github-logo" src="/images/GitHub_Logo.png" />
                        </a>
                    </div>
                </div>

            </div>
        </>
    );
}

export default UserPageContent;