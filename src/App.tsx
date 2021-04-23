import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';
import UserPage from './pages/UserPage';

const App : React.FC = () => {
  return (
    <div className="body-container">
      <div className="header-block"></div>
      <Router>
        <Switch>
          <Route exact path="/" component = {Home}/>
          <Route exact path="/searchresult" component = {SearchResult}/>
          <Route exact path="/userpage" component = {UserPage}/>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
