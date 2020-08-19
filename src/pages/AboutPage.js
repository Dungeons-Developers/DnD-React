import React from 'react';
import {connect} from 'react-redux';

import theme from '../theme/theme';

import { Container, Paper } from '@material-ui/core';


function About({pageTheme}) {
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
    },
    theme: pageTheme === 'dark' ? theme.dark : theme.light,
    color: {
      color: 'inherit'
    }
  };


  return (
    <div style={styles.div}>
    <Container>
      <Paper style={{...styles.paper, ...styles.theme.accent, ...styles.color}}>
        <img src='/assets/claytonjones.png' alt='Clayton Jones'/>
        <div style={styles.info}>
          <h2 style ={styles.text}>Clayton Jones</h2>
          <h3 style ={styles.text}>Lead Developer</h3>
          <p style ={styles.text}>Frontend developer by day, gamer and musician by night. Always succeeds when rolling dexterity to crack an egg single handed.</p>
        </div>
      </Paper>
    </Container>

    <Container>
      <Paper style={{...styles.paper, ...styles.theme.accent, ...styles.color}}>
        <div style={styles.info}>
          <h2 style ={styles.text}>Daniel Nguyen</h2>
          <h3 style ={styles.text}>Project Manager</h3>
          <p style ={styles.text}>Chaotic Neutral problem wrangler. Underwhelmed until overwhelmed. Enjoys pwning noobz and staying hydrated.</p>
        </div>
        <img src='/assets/dannguyen.png' alt='Daniel Nguyen' />
      </Paper>
    </Container>

    <Container>
      <Paper style={{...styles.paper, ...styles.theme.accent, ...styles.color}}>
        <img src='/assets/madisonstehle.png' alt='Madison Stehle' />
        <div style={styles.info}>
          <h2 style ={styles.text}>Madison Stehle</h2>
          <h3 style ={styles.text}>Code Reviewer</h3>
          <p style ={styles.text}>The elves know her as [redacted], the dwarves know her as [redacted], but you know her as Madison. Pastimes include reading an unhealthy number of books and putting out metaphorical fires.</p>
        </div>
      </Paper>
    </Container>

    <Container>
      <Paper style={{...styles.paper, ...styles.theme.accent, ...styles.color}}>
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

const mapStateToProps = state => {
  return {
    pageTheme: state.theme.theme,
  }
}

export default connect(mapStateToProps)(About);
