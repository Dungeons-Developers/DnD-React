import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import CharacterCard, { CharacterDisplay } from './components/Characters/CharacterDisplay';
import CharacterForm from './components/CharacterForm';
import CampaignForm from './components/CampaignForm';
import CampaignPage from './pages/CampaignPage';
import JoinForm from './components/JoinForm';
import PrivateRoute from './components/PrivateRoute';
import Main from './components/Main';

import Header from './components/Header';
import Footer from './components/Footer';
import './styles/index.scss';

function App({ campaignID }) {
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
            <div>YOU ARE LOGGED IN</div>
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

const mapStateToProps = (state) => {
  console.log('state:', state);
  return {
    campaignID: state.campaign.campaignID
  }
}

export default connect(mapStateToProps)(App);
