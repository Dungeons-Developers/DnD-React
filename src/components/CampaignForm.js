import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {If} from 'react-if';
import {Redirect} from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import useForm from '../hooks/useForm';

import {createCampaign, resetCurrentCampaign} from '../store/slices/campaign-slice';


function CampaignForm({createCampaign, user, campaignID, resetCurrentCampaign}) {

  useEffect(() => {
    console.log('ID:',campaignID);
    resetCurrentCampaign();
    console.log('ID:',campaignID);
  }, []);

  const defaults = {
    user: user ? user.user.username : 'u',
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
    <Container>
      <form class-name="campaign-form" autoComplete="off" onSubmit={submit}>

        <div>
          <TextField 
            id="title" 
            label="Title" 
            color="primary" 
            margin="normal" 
            onChange={formChange} 
            value={fields.title}
          />
        </div>

        <div>
          <TextField 
            id="setting" 
            label="Setting" 
            color="primary" 
            margin="normal" 
            onChange={formChange} 
          />
        </div>

        <div>
          <TextField 
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
          <TextField 
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

        <Button 
          variant="contained" 
          color="primary" 
          type="submit" 
          margin="normal" 
          disabled={ !fields.title || !fields.setting || !fields.description }
          >
          Create
        </Button>

        <If condition={!!campaignID}>
            <Redirect to='/play'/>
        </If>
        
      </form>
    </Container>
  );
}

const mapDispatchToProps = { createCampaign, resetCurrentCampaign };

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
    campaignID: state.campaign.campaignID
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CampaignForm);
