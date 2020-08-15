import React from 'react';
import {connect} from 'react-redux';
import {If} from 'react-if';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import LandingPage from './pages/LandingPage';
import CharacterCard from './components/Characters/CharacterCard';

<<<<<<< HEAD
import Dice from './components/Dice';

import Header from './components/Header';
import Footer from './components/Footer';
=======
import CampaignForm from './components/CampaignForm';
import CampaignPage from './pages/CampaignPage';

>>>>>>> 5d2124d0f0c3a5b80aa5ead497c399b1f036274f

import Main from './components/Main';

import Header from './components/Header';
import Footer from './components/Footer';
import './styles/index.scss';

function App({campaignID}) {

  // console.log('doc location:',document.location)

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
            <CampaignForm />
          </Route>

          <Route exact path='/join'>
          </Route>
    
          <Route exact path='/play'>
            <CampaignPage />
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

const mapStateToProps = (state) => {
  console.log('state:', state);
  return {
    campaignID: state.campaign.campaignID
  }
}

export default connect(mapStateToProps)(App);
