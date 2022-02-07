import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import React from 'react'
import Shop from './pages/Shop';
import GamePage from './pages/GamePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/UserPage" component={UserPage} />
        <Route exact path="/Shop" component={Shop} />
        <Route exact path="/Game" component={GamePage} />
      </Switch>
    </Router>
  );
}

export default App;