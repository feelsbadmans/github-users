import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import fetchData from "../actions/searchUser";
import HomeContent from "../components/HomeContent";
import { useTypedSelector } from "../hooks/hooks";

//Строка ввода, введенный ник или подобие ника - состояние, кнопка переводит на страницу поиска, страница 1я
const Home : React.FC = () => {
    return (
        <div className="page-container">
            <HomeContent />
        </div>
    );
}

export default Home;