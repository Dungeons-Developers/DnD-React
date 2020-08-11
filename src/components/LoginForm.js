import React from 'react';
import {connect} from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

import useForm from '../hooks/useForm'

import {login} from '../store/slices/user-slice';

function LoginForm({login}) {
  const fields = {
    username: '',
    password: '',
  };

  const { handleChange, handleSubmit } = useForm(fields);

  function submit(e) {
    e.preventDefault();
    handleSubmit(login);
    e.target.reset();
  }

  function formChange(e) {
    handleChange(e.target.id, e.target.value);
  }

  return (
    <form className='login-form' noValidate autoComplete="off" onSubmit={submit}>
      <TextField id="username" label="Username" onChange={formChange}/>
      <TextField id="password" label="Password" onChange={formChange} type="password" />
      <Button variant="contained" color="primary" type='submit'>
        Log In
      </Button>
    </form>
  );
}

const mapDispatchToProps = {login};

export default connect(null, mapDispatchToProps)(LoginForm);
