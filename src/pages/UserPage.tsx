import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { resetStoreUserPage } from "../actions/actionsFetchUserPage";
import UserPageContent from "../components/UserPageContent";

const UserPage: React.FC = () => {
    const { username } = useParams<{username: string}>();
    const dispatch = useDispatch();
    dispatch(resetStoreUserPage());

    return (
        <div className="page-container" style={{ textAlign: "left" }}>
            <UserPageContent user_api_url={`https://api.github.com/users/${username}`} />
        </div>
    );
}

export default UserPage;