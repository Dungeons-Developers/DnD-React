import React from 'react';

import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import useForm from '../hooks/useForm';

function CampaignForm(props) {
  const fields = {
    title: '',
    setting: '',
    description: '',
    notes: [],
    characters: []
  }

  const { handleChange, handleSubmit } = useForm(fields);

  function submit(e) {
    e.preventDefault();
    handleSubmit();
    e.target.reset();
  }

  function formChange(e) {
    handleChange(e.target.id, e.target.value);
  }

  return (
    <Container>
      <form class-name="campaign-form" autoComplete="off" onSubmit={submit}>

        <div><TextField id="title" label="Title" color="primary" margin="normal" onChange={formChange} /></div>
        <div><TextField id="setting" label="Setting" color="primary" margin="normal" onChange={formChange} /></div>
        <div><TextField id="description" label="description" variant="outlined" margin="normal" multiline rows={6} color="primary" onChange={formChange} /></div>
        <div><TextField id="notes" label="notes" variant="outlined" margin="normal" multiline rows={4} color="primary" onChange={formChange} /></div>

        {/* invite friends functionality? */}
        <div><TextField  id="characters" label="Invite Friends" margin="normal" color="primary" onChange={formChange} /></div>

        <Button variant="contained" color="primary" type="submit" margin="normal">
          Save
        </Button>
      </form>
    </Container>
  );
}


export default CampaignForm;
