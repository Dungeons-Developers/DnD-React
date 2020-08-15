import React from 'react';

import { Container, Paper } from '@material-ui/core';


function About() {
  const styles = {
    div: {
      width: '100%',
    },
    container: {
      display: 'flex',
    },
    paper: {
      display: 'flex',
      border: 5,
      borderRadius: 10,
      margin: '20px 10px',
      padding: '10px 30px'
    },
    info: {
      margin: '10px 20px',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    text: {
      margin: 3
    }
  };


  return (
    <div style={styles.div}>
    <Container maxWidth='xl'>
      <Paper style={styles.paper}>
        <img src='/assets/claytonjones.png' alt='Clayton Jones'/>
        <div style={styles.info}>
          <h2 style ={styles.text}>Clayton Jones</h2>
          <h3 style ={styles.text}>Lead Developer</h3>
          <p style ={styles.text}>Look, a description</p>
        </div>
      </Paper>
    </Container>

    <Container>
      <Paper style={styles.paper}>
        <div style={styles.info}>
          <h2 style ={styles.text}>Daniel Nguyen</h2>
          <h3 style ={styles.text}>Project Manager</h3>
          <p style ={styles.text}>Look, a description</p>
        </div>
        <img src='/assets/dannguyen.png' alt='Daniel Nguyen' />
      </Paper>
    </Container>

    <Container>
      <Paper style={styles.paper}>
        <img src='/assets/madisonstehle.png' alt='Madison Stehle' />
        <div style={styles.info}>
          <h2 style ={styles.text}>Madison Stehle</h2>
          <h3 style ={styles.text}>Code Reviewer</h3>
          <p style ={styles.text}>Look, a description</p>
        </div>
      </Paper>
    </Container>

    <Container>
      <Paper style={styles.paper}>
        <div style={styles.info}>
          <h2 style ={styles.text}>Joel Watson</h2>
          <h3 style ={styles.text}>DevOps</h3>
          <p style ={styles.text}>Look, a description</p>
        </div>
        <img src='/assets/joelwatson.png' alt='Joel Watson' />
      </Paper>
    </Container>
    </div>

  )
}

export default About;
