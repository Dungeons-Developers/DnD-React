import React, {useEffect} from 'react';

import {connect} from 'react-redux';

import io from 'socket.io-client';

function CampaignPage(props) {

  const {campaignID, userID, title, description, notes, characters} = props;
  
  useEffect(() => {
    const socket = io.connect('http://localhost:4000');
    // const socket = io.connect('https://dnd-api-server.herokuapp.com/');

    // socket.emit('join', props.campaign._id);

    socket.emit('join', campaignID);

  }, [campaignID]);


  return (
    <>
    <h1>Campaign Page</h1>

    </>
  )
}

/*
    title: '',
    setting: '',
    description: '',
    notes: [],
    characters: [],

*/

const mapStateToProps = (state) => {
  return {
    campaignID: state.campaign.campaignID,
    userID: state.campaign.userID,
    title: state.campaign.title,
    description: state.campaign.description,
    notes: state.campaign.notes,
    characters: state.campaign.characters
  }
}

export default connect(mapStateToProps)(CampaignPage);