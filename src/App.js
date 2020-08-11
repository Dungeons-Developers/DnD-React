import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import LandingPage from './pages/LandingPage';
import CharacterCard from './pages/Characters/CharacterCard';
import CharacterDetails from './pages/Characters/CharacterDetail';

import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/characters'>
          <CharacterCard />
        </Route>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
