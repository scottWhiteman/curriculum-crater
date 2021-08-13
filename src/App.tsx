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
import SourcesPage from './pages/SourcesPage/SourcesPage';
import LoginPage from './pages/LoginPage/LoginPage';
import CurriculumDetailPage from './pages/CurriculumDetailPage/CurriculumDetailPage';

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
          <Route exact path='/curriculums'>
            <CurriculumPage/>
          </Route>
          <Route path='/sources'>
            <SourcesPage/>
          </Route>
          <Route path='/login'>
            <LoginPage/>
          </Route>
          <Route path='/curriculums/:curriculumId'>
            <CurriculumDetailPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
