import React, {useEffect, useState} from 'react';

import {connect} from 'react-redux';

import io from 'socket.io-client';

import {saveCampaign} from '../store/slices/campaign-slice';

const socket = io.connect('http://localhost:4000');

function CampaignPage(props) {

  const {
    campaignID,
    owner,
    title,
    description,
    notes,
    campaignCharacters,
    user,
    userCharacters,
    saving,
    saveCampaign,
    wholeCampaign
  } = props;

  const [currentChars, setCurrentChars] = useState(campaignCharacters);

  const [playerChar, setPlayerChar] = useState(campaignCharacters.filter(char => char.user === user.username)[0]);
  

  console.log('player char:', playerChar);

  // console.log('camp char:', campaignCharacters);

  // const socket = io.connect('https://dnd-api-server.herokuapp.com/');

  socket.emit('join', campaignID);

  useEffect(() => {

    socket.on('character-joined', payload => {
      console.log('character joining...', payload);
      setCurrentChars(c => {
        let arr = [...c];
        arr.push(payload);
        return arr;
      });
    });

    socket.on('hello', payload => {
      console.log('from server:', payload.message);
    });

  }, [campaignID]);

  function testSocket() {
    socket.emit('test', {room: campaignID, message: 'HI'});
  }

  function joinChar(char) {
    console.log('joinChar fn');
    socket.emit('character-join', {room: campaignID, character: char})
    setPlayerChar(char);
  }

  function save() {
    const toSave = {
      campaignID,
      campaign: {
        ...wholeCampaign,
        characters: currentChars.map(char => char._id),
      }
    };

    saveCampaign(toSave);
  }


  return (
    <div>
    <h1>Welcome {user.username}!</h1>
    <h2>CampaignID: {campaignID}</h2>
    <h3>Owner: {owner}</h3>
    <div>
      <h3>Characters in campaign:</h3>
      {currentChars.map((char, i) => (
        <>
          <p>{char.name}</p>
          <p>{char.class}</p>
        </>
      ))}
    </div>
    {
    !playerChar &&
    <div>
      <h4>Your characters</h4>
      {userCharacters.map((char, i) => (
        <>
          <p>{char.name}</p>
          <p>{char.class}</p>
          <button
            onClick={() => { joinChar(char) }}
          >
            Add this Character to Campaign
          </button>
        </>
      ))}
    </div>
    }

    {owner === user.username && <button onClick={testSocket}>TEST</button>}
    {owner === user.username && <button onClick={save} disabled={saving}>Save Campaign</button>}

    </div>
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
    wholeCampaign: state.campaign,
    campaignID: state.campaign.campaignID,
    owner: state.campaign.user,
    title: state.campaign.title,
    description: state.campaign.description,
    notes: state.campaign.notes,
    campaignCharacters: state.campaign.characters,
    user: state.users.user,
    userCharacters: state.users.characters,
    saving: state.campaign.saving,
  }
}

const mapDispatchToProps = {saveCampaign}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignPage);