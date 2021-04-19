import React from "react";
import { Link } from "react-router-dom";

const UserPage : React.FC = () => {
    return (
        <div className="container">
            <Link to="/">
                    <img className="image" src="/images/back_arrow_light.png"/>
            </Link>
            789
        </div>
    );
}

export default UserPage;