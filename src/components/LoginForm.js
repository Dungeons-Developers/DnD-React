import React from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import useForm from '../hooks/useForm'

import { login } from '../store/slices/user-slice';

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
    <form className='login-form' autoComplete="off" onSubmit={submit}>
      <div>
        <TextField id="username" label="Username" fullWidth onChange={formChange} required />
      </div>
      <div>
        <TextField id="password" label="Password" fullWidth onChange={formChange} type="password" required />
      </div>
      <Box my="1rem">
        <Button variant="contained" color="primary" fullWidth type='submit'>
          Log In
        </Button>
      </Box>
    </form>
  );
}

const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(LoginForm);
