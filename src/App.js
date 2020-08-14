import React from 'react';
import {connect} from 'react-redux';
import {If} from 'react-if';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import LandingPage from './pages/LandingPage';
import CharacterCard from './components/Characters/CharacterCard';
import CampaignForm from './components/CampaignForm';
import CampaignPage from './pages/CampaignPage';

import Header from './components/Header';
import Footer from './components/Footer';


import './styles/index.scss';

function App({campaignID}) {

  // console.log('doc location:',document.location)

  const styles = {
    app: {
      position: 'relative'
    }
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

const mapStateToProps = (state) => {
  console.log('state:', state);
  return {
    campaignID: state.campaign.campaignID
  }
}

export default connect(mapStateToProps)(App);
