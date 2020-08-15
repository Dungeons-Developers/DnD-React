import React, {useEffect} from 'react';

import {connect} from 'react-redux';

import io from 'socket.io-client';

function CampaignPage(props) {

  const {campaignID, owner, title, description, notes, characters, user} = props;
  
  const socket = io.connect('http://localhost:4000');

  useEffect(() => {
    // const socket = io.connect('https://dnd-api-server.herokuapp.com/');

    // socket.emit('join', props.campaign._id);

    socket.emit('join', campaignID);

    socket.on('hello', payload => {
      console.log('from server:', payload.message);
    });

  }, [campaignID, socket]);

  function testSocket() {
    socket.emit('test', {room: campaignID, message: 'HI'});
  }


  return (
    <>
    <h1>Welcome {user.username}!</h1>
    <h2>CampaignID: {campaignID}</h2>
    <h3>Owner: {owner}</h3>

    {owner === user.username && <button onClick={testSocket}>TEST</button>}

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
    owner: state.campaign.user,
    title: state.campaign.title,
    description: state.campaign.description,
    notes: state.campaign.notes,
    characters: state.campaign.characters,
    user: state.users.user
  }
}

export default connect(mapStateToProps)(CampaignPage);