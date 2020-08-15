import React from 'react';
import {connect} from 'react-redux';
import {If} from 'react-if';
import {Redirect} from 'react-router-dom';


import {TextField, Container, Button} from '@material-ui/core';

import useForm from '../hooks/useForm';

import {findCampaign} from '../store/slices/campaign-slice';



function JoinForm({findCampaign, campaignID}) {

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

  return (
    <Container>
      <form autoComplete='off' onSubmit={submit}>
        <div>
          <TextField 
            id="campaignID" 
            label="CampaignID" 
            color="primary" 
            margin="normal" 
            onChange={formChange} 
            value={fields.campaignID}
          />
        </div>
        <Button 
          variant="contained" 
          color="primary" 
          type="submit" 
          margin="normal"
          disabled={!fields.campaignID}
        >
          Join
        </Button>
      </form>
      <If condition={!!campaignID}>
          <Redirect to='/play'/>
      </If>
    </Container>
  )
}

const mapDispatchToProps = {findCampaign};

const mapStateToProps = state => {
  return {
    campaignID: state.campaign.campaignID
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinForm);