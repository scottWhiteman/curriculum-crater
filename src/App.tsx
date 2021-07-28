import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import Homepage from './pages/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import CurriculumPage from './pages/CurriculumPage/CurriculumPage';

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
            <CurriculumPage/>
          </Route>
          <Route path='/sources'>
            <CurriculumPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
