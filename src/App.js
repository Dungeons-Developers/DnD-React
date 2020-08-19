import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import CharacterDisplay from './components/Characters/CharacterDisplay';
import Dashboard from './components/Dashboard';
import CharacterForm from './components/CharacterForm';
import CampaignForm from './components/CampaignForm';
import CampaignPage from './pages/CampaignPage';
import JoinForm from './components/JoinForm';
import PrivateRoute from './components/PrivateRoute';
import Main from './components/Main';

import Header from './components/Header';
import Footer from './components/Footer';
import './styles/index.scss';

export default function App() {
  const styles = {
    app: {
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column'
    },
  }

  return (
    <div className="App" style={styles.app}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Main>

          <Route exact path='/login'>
            <LandingPage />
          </Route>

          <Route exact path='/about'>
            <AboutPage />
          </Route>

          <PrivateRoute exact path='/'>
            <Dashboard />
          </PrivateRoute>

          <PrivateRoute exact path='/characters'>
            <Container>
              <CharacterDisplay />
            </Container>
          </PrivateRoute>

          <PrivateRoute exact path='/create-character'>
            <CharacterForm />
          </PrivateRoute>

          <PrivateRoute exact path='/create-campaign'>
            <CampaignForm />
          </PrivateRoute>

          <PrivateRoute exact path='/join'>
            <JoinForm />
          </PrivateRoute>

          <PrivateRoute exact path='/play'>
            <CampaignPage />
          </PrivateRoute>

          <PrivateRoute exact path='/invites'>

          </PrivateRoute>


        </Main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
