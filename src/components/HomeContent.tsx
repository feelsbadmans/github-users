import React, { } from "react";
import HomeForm from "./HomeForm";

const HomeContent: React.FC = () => {
    return (
        <>
            <div className="home-content">
                <img src="/images/github.png" className="home-image" />
                <h1>Find GitHub User</h1>
            </div>
            <div className="home-content" style={{ alignItems: "flex-start" }}>
                <HomeForm />
            </div>
        </>
    );
}

export default HomeContent;