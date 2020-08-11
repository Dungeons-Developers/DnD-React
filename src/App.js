import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import LandingPage from './pages/LandingPage';

import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <Route exact path='/'>
          <LandingPage />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
