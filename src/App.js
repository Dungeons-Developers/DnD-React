import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import LandingPage from './pages/LandingPage';
import CharacterCard from './components/Characters/CharacterCard';

import Header from './components/Header';
import Footer from './components/Footer';


import './styles/index.scss';

function App() {

  const styles = {
    app: {
      position: 'relative'
    }
  }

  return (
    <div className="App" style={styles.app}>
      <CssBaseline />
      <BrowserRouter>

        <Route exact path='/'>
          <LandingPage />
        </Route>
        
        <Route exact path='/home'>
          <Header />

        </Route>

        <Route exact path='/characters'>
          <Header />
          <CharacterCard />
        </Route>
    
        <Route exact path='/create-campaign'>
          <Header />

        </Route>

        <Route exact path='/join'>
          <Header />

        </Route>

        <Route exact path='/invites'>
          <Header />

        </Route>

        <Route exact path='/about'>
          <Header />

        </Route>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
