import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import LandingPage from './pages/LandingPage';
import CharacterCard from './components/Characters/CharacterCard';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/index.scss';

function App() {

  const styles = {
    app: {
      display: 'flex',
    },
  }

  return (
    <div className="App" style={styles.app}>
      <CssBaseline />
      <BrowserRouter>
        <Header/>
        <Main>
          
        <Route exact path='/'>
          <LandingPage />
        </Route>
        
        <Route exact path='/home'>
        </Route>

        <Route exact path='/characters'>
          <CharacterCard />
        </Route>
    
        <Route exact path='/create-campaign'>
        </Route>

        <Route exact path='/join'>
        </Route>

        <Route exact path='/invites'>
        </Route>

        <Route exact path='/about'>
        </Route> 
        </Main>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
