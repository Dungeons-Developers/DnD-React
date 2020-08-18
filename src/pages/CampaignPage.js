import React, {useEffect, useState} from 'react';
import {If} from 'react-if';
import {Redirect} from 'react-router-dom';

import {connect} from 'react-redux';

import io from 'socket.io-client';

import {Button, Paper} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';

import CharacterCard from '../components/Characters/CharacterCard';

import {saveCampaign, disconnectFromCampaign} from '../store/slices/campaign-slice';
import {getCharacters} from '../store/slices/character-slice';

const socket = io.connect('http://localhost:4000');

const ColorButton = withStyles((theme) => ({
  root: {
    color: red[500],
    '&:hover': {
      backgroundColor: red[700],
      color: theme.palette.getContrastText(red[500])
    },
  },
}))(Button);

const AddButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700]
    },
  },
}))(Button);


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
    wholeCampaign,
    disconnectFromCampaign,
    getCharacters
  } = props;

  const [currentChars, setCurrentChars] = useState(campaignCharacters);

  const [playerChar, setPlayerChar] = useState(campaignCharacters.filter(char => char.user === user)[0]);
  

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

  useEffect(() => {
    getCharacters(user);
  }, []);

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

  function disconnect() {
    disconnectFromCampaign(null);
  }

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    },
    titleContainer: {
      display: 'flex',
      width: '95%',
      padding: '5px 10px',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      borderBottom: '1px solid black'
    },
    title: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    campInfo: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '20%'
    },
    userChars: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    campChars: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    paper: {
      width: '20%',
      padding: '5px',
      paddingBottom: '15px',
      marginBottom: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '220px'
    },
    classInfo: {
      margin: 0,
      padding: '2px 0',
      fontWeight: 'bold',
      fontSize: '12px'
    }
  }


  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
        <div style={styles.campInfo}>
          <h4 style={{margin: 0}}>Owner: {owner}</h4>
          <h4 style={{margin: 0}}>User: {user}</h4>
        </div>
        <div style={styles.title}>
          <h1 style={{margin: 0}}>{title}</h1>
          <h4 style={{margin: 0}}>CampaignID: {campaignID}</h4>
        </div>
        <div style={styles.campInfo}>
          <ColorButton 
            onClick={disconnect}
            size='small'
          >
            Disconnect
          </ColorButton>
        </div>
      </div>
      <h3>Characters in campaign:</h3>
      <div style={styles.campChars}> 
        {currentChars.map((char, i) => (
          <CharacterCard 
            character={char}
            delete={false}
            edit={owner === user ? true : false}
            style={{width: '25%'}}
            key={i}
          />
        ))}
      </div>

      {
        !playerChar &&
        <>
        <h4>Add a Character:</h4>
        <div style={styles.userChars}>
          {userCharacters.map((char, i) => (
            <Paper style={styles.paper} key={i}>
              <p style={styles.classInfo}>{char.name}</p>
              <p style={styles.classInfo}>Class: {char.class}</p>
              <p style={styles.classInfo}>Lvl: {char.level}</p>
              <AddButton
                onClick={() => { joinChar(char) }}
                size='small'
                variant='contained'
              >
                Add
              </AddButton>
            </Paper>
          ))}
        </div>
        </>
      }

      {owner === user && <button onClick={testSocket}>TEST</button>}
      {owner === user && <button onClick={save} disabled={saving}>Save Campaign</button>}

      <If condition={!campaignID}>
        <Redirect to='/join'/>
      </If>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    wholeCampaign: state.campaign,
    campaignID: state.campaign.campaignID,
    owner: state.campaign.user,
    title: state.campaign.title,
    description: state.campaign.description,
    notes: state.campaign.notes,
    campaignCharacters: state.campaign.characters,
    user: state.users.username,
    userCharacters: state.characters.allCharacters,
    saving: state.campaign.saving,
  }
}

const mapDispatchToProps = {saveCampaign, disconnectFromCampaign, getCharacters}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignPage);