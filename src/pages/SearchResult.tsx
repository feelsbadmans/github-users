import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchData } from "../actions/searchNickname";
import { useTypedSelector } from "../hooks/hooks";

//Пропсы: результаты поиска, 
const SearchResult : React.FC = () => {
    const dispatch = useDispatch();

  const { users, loading, error} = useTypedSelector(state => state.fetchDataReducer);

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  console.log(users);
    return (
        <div className="container">
            <Link to="/">
                <img className="image" src="/images/back_arrow_light.png"/>
            </Link>
            <h1>456</h1>
        </div>
    );
}

export default SearchResult;