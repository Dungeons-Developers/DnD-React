import React, {useEffect} from 'react';

import {connect} from 'react-redux';

import io from 'socket.io-client';

function CampaignPage(props) {

  const {campaignID, userID, title, description, notes, characters, user} = props;
  
  const socket = io.connect('http://localhost:4000');
  useEffect(() => {
    // const socket = io.connect('https://dnd-api-server.herokuapp.com/');

    // socket.emit('join', props.campaign._id);

    socket.emit('join', campaignID);

  }, [campaignID, socket]);


  return (
    <>
    <h1>Welcome {user.username}!</h1>
    <h2>CampaignID: {campaignID}</h2>

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
    characters: state.campaign.characters,
    user: state.users.user
  }
}

export default connect(mapStateToProps)(CampaignPage);