import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {If} from 'react-if';
import {Redirect} from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {withStyles, Paper} from '@material-ui/core';
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
      justifyContent: 'center',
      width: '100%'
    },
    theme: pageTheme === 'dark' ? theme.dark: theme.light,
    color: {
      color: 'inherit'
    }
  }

  const defaults = {
    user: user ? user.username : 'u',
    title: '',
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
    <Box mt="0.5rem" style={styles.container}>
      <Paper square>
        <Box p='1rem'>
          <form className="campaign-form" autoComplete="off" onSubmit={submit} style={styles.color}>
            <Grid container spacing={3}>

              <Grid item xs={12} sm={6}>
                <CssTextField 
                  id="title" 
                  label="Title" 
                  color="primary" 
                  margin="normal" 
                  onChange={formChange} 
                  value={fields.title}
                  style={styles.color}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <CssTextField 
                  id="setting" 
                  label="Setting" 
                  color="primary" 
                  margin="normal" 
                  onChange={formChange} 
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                  <CssTextField 
                    id="description" 
                    label="description" 
                    variant="outlined" 
                    margin="normal" 
                    multiline 
                    rows={6} 
                    color="primary" 
                    onChange={formChange}
                    fullwidth
                    style={{width: '100%'}}
                  />
              </Grid>

              <Grid item xs={12}>
                <CssTextField 
                  id="notes" 
                  label="notes" 
                  variant="outlined" 
                  margin="normal" 
                  multiline 
                  rows={4} 
                  color="primary" 
                  onChange={formChange}
                  fullwidth 
                  style={{width: '100%'}}
                />
              </Grid>

              <Grid item xs={12}>
                <ColorButton 
                  variant="contained" 
                  color="primary" 
                  type="submit" 
                  margin="normal" 
                  disabled={ !fields.title || !fields.setting || !fields.description }
                  fullWidth
                  >
                  Create
                </ColorButton>
              </Grid>

              <If condition={!!campaignID}>
                  <Redirect to='/play'/>
              </If>
            </Grid>
          </form>
        </Box>
      </Paper>
    </Box>
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
