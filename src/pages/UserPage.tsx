import React from "react";
import { Link, useHistory } from "react-router-dom";

const UserPage : React.FC = () => {
    console.log("user");
    let history = useHistory();
    const goBack = () => {
        history.goBack();
    };
    return (
        <>
            <button className="button-container" onClick={goBack}>
                    <img className="image" src="/images/back_arrow_light.png"/>
            </button>
            789
        </>
    );
}

export default UserPage;