import React from "react";
import { Link } from "react-router-dom";

const UserPage : React.FC = () => {
    console.log("user");
    return (
        <div className="container">
            <Link to="/">
                    <img className="image" src="/images/back_arrow_light.png"/>
            </Link>
            789
            <Link to="/searchresult">
                <h1>biba</h1>
            </Link>
        </div>
    );
}

export default UserPage;