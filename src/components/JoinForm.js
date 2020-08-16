import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {If} from 'react-if';
import {Redirect} from 'react-router-dom';


import {TextField, Container, Button, Paper} from '@material-ui/core';

import useForm from '../hooks/useForm';

import {findCampaign, getUserCampaigns} from '../store/slices/campaign-slice';



function JoinForm({findCampaign, campaignID, campaigns, username, getUserCampaigns}) {

  useEffect(() => {
    getUserCampaigns(username);
  }, [getUserCampaigns, username])

  const defaults = {
    campaignID: ''
  }

  function submit(e) {
    e.preventDefault();
    handleSubmit(findCampaign);
    e.target.reset();
  }

  function formChange(e) {
    handleChange(e.target.id, e.target.value)
  }

  const {handleChange, handleSubmit, fields} = useForm(defaults);

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    form: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    campList: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    paper: {
      width: '30%',
      padding: '5px',
      marginBottom: '10px'
    }
  }

  return (
    <Container style={styles.container}>
      <div>
        <h1>Enter the ID of the campaign you wish to join.</h1>
        <p>If you don't have any campaigns of your own, create one, or ask a friend to join theirs!</p>
      </div>
      <form autoComplete='off' onSubmit={submit} style={styles.form}>
        <div>
          <TextField 
            id="campaignID" 
            label="CampaignID" 
            color="secondary"
            margin="normal" 
            onChange={formChange} 
            value={fields.campaignID}
          />
        </div>
        <Button 
          variant="contained" 
          color="secondary" 
          type="submit" 
          margin="normal"
          disabled={!fields.campaignID}
        >
          Join
        </Button>
      </form>
      <If condition={campaigns.length > 0}>
        <div>
          <p>Your campaigns:</p>
          <div style={styles.campList}>
            {campaigns.map((cam, i) => (
              <Paper style={styles.paper}>
                <h4>{cam.title}</h4>
                <p>ID: {cam._id}</p>
              </Paper>
            ))}
          </div>
        </div>
      </If>

      <If condition={!!campaignID}>
          <Redirect to='/play'/>
      </If>
    </Container>
  )
}

const mapDispatchToProps = {findCampaign, getUserCampaigns};

const mapStateToProps = state => {
  return {
    campaignID: state.campaign.campaignID,
    campaigns: state.campaign.allCampaigns,
    username: state.users.username
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinForm);