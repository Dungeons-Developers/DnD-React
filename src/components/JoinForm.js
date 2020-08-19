import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { If } from 'react-if';
import { Redirect } from 'react-router-dom';



import { TextField, Container, Button, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors'

import useForm from '../hooks/useForm';

import { findCampaign, getUserCampaigns } from '../store/slices/campaign-slice';

import theme from '../theme/theme';

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
}))(Button);

const CssTextField = withStyles({
  root: {

    '& label.Mui-focused': {
      color: 'inherit',
    },
    '& label': {
      color: 'inherit',
    },
    '& .MuiInput-underline:after': {
      color: 'inherit',
      borderBottomColor: 'inherit',
    },
    '& .MuiInput-underline': {
      color: 'inherit',
    },
    '& .MuiOutlinedInput-root': {
      color: 'inherit',
      '& fieldset': {
        borderColor: 'inherit',
      },
      '&.Mui-focused fieldset': {
        color: 'inherit',
        borderColor: 'inherit',
      },
    },
  },
})(TextField);

function JoinForm({ findCampaign, campaignID, campaigns, username, getUserCampaigns, pageTheme }) {

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

  const { handleChange, handleSubmit, fields } = useForm(defaults);

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
      paddingBottom: '15px',
      marginBottom: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '220px'
    },
    theme: pageTheme === 'dark' ? theme.dark : theme.light,
    color: {
      color: 'inherit'
    }
  }

  return (
    <Container style={styles.container} className='join-form'>
      <div style={styles.container}>
        <h2 style={{ textAlign: 'center' }}>Enter the ID of the campaign you wish to join, or select on from below.</h2>
        <p style={{ textAlign: 'center' }}>If you don't have any campaigns of your own, create one, or ask a friend to join theirs!</p>
      </div>
      <form autoComplete='off' onSubmit={submit} style={styles.form}>
        <div>
          <CssTextField
            id="campaignID"
            label="CampaignID"
            color="default"
            margin="normal"
            onChange={formChange}
            value={fields.campaignID}
          />
        </div>
        <ColorButton
          variant="contained"
          color="secondary"
          type="submit"
          margin="normal"
          disabled={!fields.campaignID}
        >
          Join
        </ColorButton>
      </form>
      <If condition={campaigns.length > 0}>
        <div>
          <h3>Your campaigns:</h3>
          <div style={styles.campList}>
            {campaigns.map((cam, i) => (
              <Paper
                style={{ ...styles.paper, ...styles.theme.accent, ...styles.color }}
                variant='outlined'
                key={i}
              >
                <h4>{cam.title}</h4>
                <p>ID: {cam._id}</p>
                <ColorButton
                  size='small'
                  margin='normal'
                  onClick={() => findCampaign({ campaignID: cam._id })}
                >
                  Join
                </ColorButton>
              </Paper>
            ))}
          </div>
        </div>
      </If>

      <If condition={!!campaignID}>
        <Redirect to='/play' />
      </If>
    </Container>
  )
}

const mapDispatchToProps = { findCampaign, getUserCampaigns };

const mapStateToProps = state => {
  return {
    campaignID: state.campaign.campaignID,
    campaigns: state.campaign.allCampaigns,
    username: state.users.username,
    pageTheme: state.theme.theme
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinForm);