import React from 'react';
import Container from '@material-ui/core/Container';

import Title from '../components/Title'
import LoginForm from '../components/LoginForm';

function LandingPage(props) {
  return (
    <Container maxWidth="lg">
      <Title title='Realm Something' />
      <LoginForm />
    </Container>
  );
}

export default LandingPage;
