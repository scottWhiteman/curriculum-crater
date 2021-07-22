import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

import Homepage from './components/Homepage/Homepage';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar/>
        </header>
        <Switch>
          <Route exact path='/'>
            <Homepage/>
          </Route>
          <Route path='/curriculums'>
            <Search/>
          </Route>
          <Route path='/resources'>
            <Search/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
