import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TempHome from './components/TempHome';
import Player from './components/playerComponents/Player';
import HomePage from './components/playerComponents/HomePage/HomePage';
import Navbar from './components/playerComponents/HomePage/NavBar/Navbar';
import { ThemeContext, themes } from 'Context/ThemeContext';

function App() {
  return (
    <ThemeContext.Provider value={themes}>
      <Router>
        <Route exact path='/homepage'>
          <TempHome />
        </Route>

        <Route path='/player/username=:username'>
          <Navbar allowSearch={true} />
          <Player />
        </Route>

        <Route exact path='/'>
          <Navbar allowSearch={false} />
          <HomePage />
        </Route>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
