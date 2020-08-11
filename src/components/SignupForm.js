import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import useForm from '../hooks/useForm'

import { create } from '../store/slices/user-slice';

function SignupForm(props) {
  const fields = {
    username: '',
    password: '',
    confirmed: '',
  };

  const { handleChange, handleSubmit } = useForm(fields);

  function submit(e) {
    e.preventDefault();
    handleSubmit(create);
    e.target.reset();
  }

  function formChange(e) {
    handleChange(e.target.id, e.target.value);
  }

  return (
    <form className='login-form' noValidate autoComplete="off" onSubmit={submit}>
      <div>
        <TextField id="username" label="Username" fullWidth onChange={formChange} />
      </div>
      <div>
        <TextField id="password" label="Password" fullWidth onChange={formChange} type='password' />
      </div>
      <div>
        <TextField id="confirmed" label="Confirm Password" fullWidth onChange={formChange} type='password' />
      </div>
      <Box my="1rem">
        <Button variant="contained" fullWidth color="primary" type='submit'>
          Signup
        </Button>
      </Box>
    </form>
  );
}

const mapDispatchToProps = { create };

export default connect(null, mapDispatchToProps)(SignupForm);