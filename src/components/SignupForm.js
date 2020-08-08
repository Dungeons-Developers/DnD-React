import React from 'react';
import TextField from '@material-ui/core/TextField';

import useForm from '../hooks/useForm'

function SignupForm(props) {
  const fields = {
    username: '',
    password: '',
    confirmed: '',
  };

  const { handleChange, handleSubmit } = useForm(fields);

  return (
    <form className='signup-form' autoComplete="off">
      <TextField id="username" label="Username" />
      <TextField id="password" label="Password" />
      <TextField id="confirmed" label="Confirm Password" />
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </form>
  );
}

export default SignupForm;
