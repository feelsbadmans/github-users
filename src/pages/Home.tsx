import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

//Строка ввода, введенный ник или подобие ника - состояние, кнопка переводит на страницу поиска, страница 1я
const Home : React.FC = () => {
    const [username, setUsername] = useState("");
    const textareaRef = useRef(null);
    return (
        <div className="container">
            <h1>GitHub Users Searching</h1>
            <textarea ref={textareaRef} value={username}  onChange={(e) => setUsername(e.target.value)}/>
            <Link to={{pathname:"/searchresult", state: {query: username}}}>
                <h1>boba</h1>
            </Link>
            <Link to="/userpage">
                <h1>biba</h1>
            </Link>
        </div>
    );
}

export default Home;