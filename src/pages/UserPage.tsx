import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { resetStoreUserPage } from "../actions/actionsFetchUserPage";
import UserPageContent from "../components/UserPageContent";
import { locationUserPage } from "../types/interfaces";

const UserPage: React.FC = () => {
    let location = useLocation<locationUserPage>();
    const dispatch = useDispatch();
    dispatch(resetStoreUserPage());

    return (
        <div className="page-container" style={{ textAlign: "left" }}>
            <UserPageContent user_api_url={location.state.api_url} />
        </div>
    );
}

export default UserPage;