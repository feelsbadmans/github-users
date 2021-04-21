import React, { } from "react";
import HomeForm from "./HomeForm";

const HomeContent: React.FC = () => {
    return (
        <>
            <div className="home-content">
                <img src="/images/github.png" />
                <h1>Find GitHub User</h1>
            </div>
            <div className="home-content" style={{ alignItems: "baseline" }}>
                <HomeForm />
            </div>
        </>
    );
}

export default HomeContent;