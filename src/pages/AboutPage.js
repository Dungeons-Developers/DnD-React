import React from 'react';

import { Container, Paper } from '@material-ui/core';


function About() {
  const styles = {
    container: {
      display: 'flex',
    },
    paper: {
      display: 'flex',
      border: 5,
      borderRadius: 10,
      margin: 10,
      padding: '10px 30px'
    },
    info: {
      margin: 10,
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    text: {
      margin: 3
    }
  };
  

  return (
    <div>
    <Container>
      <Paper style={styles.paper}>
        <img src='http://via.placeholder.com/150x150' />
        <div style={styles.info}>
          <h2 style ={styles.text}>Example Human</h2>
          <h3 style ={styles.text}>Title</h3>
          <p style ={styles.text}>Look a description</p>
        </div>
      </Paper>
    </Container>

    <Container>
      <Paper style={styles.paper}>
        <div style={styles.info}>
          <h2 style ={styles.text}>Example Human</h2>
          <h3 style ={styles.text}>Title</h3>
          <p style ={styles.text}>Look a description</p>
        </div>
        <img src='http://via.placeholder.com/150x150' />
      </Paper>
    </Container>

    <Container>
      <Paper style={styles.paper}>
        <img src='http://via.placeholder.com/150x150' />
        <div style={styles.info}>
          <h2 style ={styles.text}>Example Human</h2>
          <h3 style ={styles.text}>Title</h3>
          <p style ={styles.text}>Look a description</p>
        </div>
      </Paper>
    </Container>

    <Container>
      <Paper style={styles.paper}>
        <div style={styles.info}>
          <h2 style ={styles.text}>Example Human</h2>
          <h3 style ={styles.text}>Title</h3>
          <p style ={styles.text}>Look a description</p>
        </div>
        <img src='http://via.placeholder.com/150x150' />
      </Paper>
    </Container>
    </div>
  )
}

export default About;
