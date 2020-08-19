import React from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import {withStyles} from '@material-ui/core';
import {red} from '@material-ui/core/colors'

import useForm from '../hooks/useForm'

import { login } from '../store/slices/user-slice';

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
      color: '#EEEEEE',
    },
    '& label': {
      color: '#EEEEEE',
    },
    '& .MuiInput-underline:after': {
      color: '#EEEEEE',
      borderBottomColor: '#EEEEEE',
    },
    '& .MuiInput-underline:before': {
      color: '#EEEEEE',
      borderBottomColor: '#EEEEEE',
    },
    '& .MuiInput-underline': {
      color: '#EEEEEE',
    },
    '& .MuiOutlinedInput-root': {
      color: '#EEEEEE',
      '& fieldset': {
        borderColor: '#EEEEEE',
      },
      '&.Mui-focused fieldset': {
        color: '#EEEEEE',
        borderColor: '#EEEEEE',
      },
    },
  },
})(TextField);

function LoginForm({ login }) {

  const defaults = {
    username: '',
    password: '',
  };

  const { handleChange, handleSubmit } = useForm(defaults);

  function submit(e) {
    e.preventDefault();
    handleSubmit(login);
    e.target.reset();
  }

  function formChange(e) {
    handleChange(e.target.id, e.target.value);
  }

  return (
    <form className='login-form' autoComplete="off" onSubmit={submit} >
      <div>
        <CssTextField id="username" label="Username" fullWidth onChange={formChange} required />
      </div>
      <div>
        <CssTextField id="password" label="Password" fullWidth onChange={formChange} type="password" required />
      </div>
      <Box my="1rem">
        <ColorButton variant="contained" color="primary" fullWidth type='submit'>
          Log In
        </ColorButton>
      </Box>
    </form>
  );
}

const mapDispatchToProps = { login };

// const mapStateToProps = state => {
//   return {
//     pageTheme: state.theme.theme
//   }
// }

export default connect(null, mapDispatchToProps)(LoginForm);
