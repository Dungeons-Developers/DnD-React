import React, { useEffect, useState } from 'react';
import { If } from 'react-if';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import io from 'socket.io-client';

import { Button, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

import CharacterCard from '../components/Characters/CharacterCard';

import { saveCampaign, disconnectFromCampaign, setCampaignPath } from '../store/slices/campaign-slice';
import { getCharacters } from '../store/slices/character-slice';

import Roller from '../components/CampaignRoller';

import theme from '../theme/theme';

// const socket = io.connect('http://localhost:4000');
const socket = io.connect('https://dnd-api-server.herokuapp.com/');

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
    campaignCharacters,
    user,
    userCharacters,
    saving,
    saveCampaign,
    wholeCampaign,
    disconnectFromCampaign,
    getCharacters,
    setCampaignPath,
    pageTheme
  } = props;

  const [currentChars, setCurrentChars] = useState(campaignCharacters);

  const [playerChar, setPlayerChar] = useState(campaignCharacters.filter(char => char.user === user)[0]);

  const [log, setLog] = useState([]);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  console.log('player char:', playerChar);

  // console.log('camp char:', campaignCharacters);

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

    socket.on('roll', payload => {
      console.log('rolled!', payload);
      setLog(l => {
        let arr = [...l];
        arr.push(payload);
        return arr;
      });
    })

    socket.on('hello', payload => {
      console.log('from server:', payload.message);
    });

  }, [campaignID]);

  useEffect(() => {
    getCharacters(user);
    setCampaignPath('/play');

    return () => { setCampaignPath('') }
  }, [getCharacters, setCampaignPath, user]);

  function joinChar(char) {
    console.log('joinChar fn');
    socket.emit('character-join', { room: campaignID, character: char })
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
      width: '60%',
      height: '100%',
      overflowY: 'auto',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'flex-start'
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
      fontSize: '12px',
      color: 'inherit'
    },
    main: {
      display: 'flex',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    log: {
      display: 'flex',
      width: '100%',
      padding: '0 5px',
      minWidth: '150px',
      maxHeight: '300px',
      height: '60%',
      overflowY: 'auto',
      border: '1px solid black',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    charHead: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    rollSection: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%',
      minHeight: '100%',
      width: '30%',
    },
    card: {
      width: '25%'
    },
    theme: pageTheme === 'dark' ? theme.dark : theme.light,
    color: {
      color: 'inherit'
    }
  }


  return (
    <div style={styles.container}>

      {/* Title */}
      <div style={styles.titleContainer}>
        <div style={styles.campInfo}>
          <h4 style={{ margin: 0 }}>Owner: {owner}</h4>
          <h4 style={{ margin: 0 }}>User: {user}</h4>
        </div>
        <div style={styles.title} onClick={handleClick}>
          <h1 style={{ margin: 0 }}>{title}</h1>
          <h4 style={{ margin: 0 }}>CampaignID: {campaignID}</h4>
        </div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography>{description}</Typography>
        </Popover>
        <div style={styles.campInfo}>
          <ColorButton
            onClick={disconnect}
            size='small'
          >
            Disconnect
          </ColorButton>
        </div>
      </div>

      <div style={styles.charHead}>
        <h3>Characters in campaign:</h3>
      </div>
      <div style={styles.main}>

        {/* Camapaign Characters List */}
        <div style={styles.campChars}>
          {currentChars.map((char, i) => (
            <CharacterCard
              character={char}
              delete={false}
              edit={owner === user ? true : false}
              style={{ ...styles.card }}
              key={i}
            />
          ))}
        </div>

        <div style={styles.rollSection}>

          <div style={styles.log}>
            {log.map((roll, i) => (
              <p key={i}><span style={{ fontWeight: 'bold' }}>{roll.time} - </span><span style={{ fontWeight: 'bold' }}>{roll.char.name}</span> rolled {roll.number} D{roll.type}: <span style={{ fontWeight: 'bold' }}>{roll.total}</span></p>
            ))}
          </div>

          {playerChar && <Roller socket={socket} playerChar={playerChar}/>}


        </div>
        {/* roll log */}

      </div>


      {/* Shows list of user characters if they don't have any in the campaign */}
      {
        !playerChar &&
        <>
          <h4>Add a Character:</h4>
          <div style={styles.userChars}>
            {userCharacters.map((char, i) => (
              <Paper style={{...styles.paper, ...styles.theme.accent, ...styles.color}} key={i}>
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

      {owner === user && <button onClick={save} disabled={saving}>Save Campaign</button>}

      <If condition={!campaignID}>
        <Redirect to='/join' />
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
    pageTheme: state.theme.theme
  }
}

const mapDispatchToProps = { saveCampaign, disconnectFromCampaign, getCharacters, setCampaignPath }

export default connect(mapStateToProps, mapDispatchToProps)(CampaignPage);