import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {If} from 'react-if';
import {Redirect} from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import {withStyles} from '@material-ui/core';
import {red} from '@material-ui/core/colors'


import useForm from '../hooks/useForm';

import {createCampaign} from '../store/slices/campaign-slice';

import theme from '../theme/theme';

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

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
}))(Button);


function CampaignForm({createCampaign, user, campaignID, pageTheme}) {

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    theme: pageTheme === 'dark' ? theme.dark: theme.light,
    color: {
      color: 'inherit'
    }
  }

  const defaults = {
    user: user ? user.username : 'u',
    title: 'Simple Title',
    setting: '',
    description: '',
    notes: [],
    characters: [],
    isComplete: false
  }

  const { handleChange, handleSubmit, fields } = useForm(defaults);

  function submit(e) {
    e.preventDefault();
    handleSubmit(createCampaign);
    e.target.reset();
  }

  function formChange(e) {
    handleChange(e.target.id, e.target.value);
  }

  return (
    <Container style={styles.container}>
      <form className="campaign-form" autoComplete="off" onSubmit={submit} style={styles.color}>

        <div>
          <CssTextField 
            id="title" 
            label="Title" 
            color="primary" 
            margin="normal" 
            onChange={formChange} 
            value={fields.title}
            style={styles.color}
          />
        </div>

        <div>
          <CssTextField 
            id="setting" 
            label="Setting" 
            color="primary" 
            margin="normal" 
            onChange={formChange} 
          />
        </div>

        <div>
          <CssTextField 
            id="description" 
            label="description" 
            variant="outlined" 
            margin="normal" 
            multiline 
            rows={6} 
            color="primary" 
            onChange={formChange} 
          />
        </div>

        <div>
          <CssTextField 
            id="notes" 
            label="notes" 
            variant="outlined" 
            margin="normal" 
            multiline 
            rows={4} 
            color="primary" 
            onChange={formChange} 
          />
        </div>

        {/* invite friends functionality? */}
        {/* <div>
          <TextField  
            id="characters" 
            label="Invite Friends" 
            margin="normal" 
            color="primary" 
            onChange={formChange} 
          />
        </div> */}

        <ColorButton 
          variant="contained" 
          color="primary" 
          type="submit" 
          margin="normal" 
          disabled={ !fields.title || !fields.setting || !fields.description }
          >
          Create
        </ColorButton>

        <If condition={!!campaignID}>
            <Redirect to='/play'/>
        </If>
        
      </form>
    </Container>
  );
}

const mapDispatchToProps = { createCampaign };

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
    campaignID: state.campaign.campaignID,
    pageTheme: state.theme.theme
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CampaignForm);
