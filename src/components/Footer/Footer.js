import React from 'react';

import {Typography, AppBar, Toolbar} from '@material-ui/core';
import {Link} from 'react-router-dom'

export default function Footer() {

  const styles = {
    footer: {
      width: '100%',
      padding: '1rem',
      position: 'fixed',
      top: 'auto',
      bottom: 0,
      backgroundColor: 'inherit',
      height: '3rem',
      display: 'flex',
      justifyContent: 'center'
      
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    link: {
      textDecoration: 'none',
      color: 'black'
    }
  }
  return (
    <AppBar style={styles.footer}>
      <Toolbar style={styles.toolbar}>
        <Typography component='p' style={styles.link}>&copy; Dungeons & Developers</Typography>
        <Link to='/about' style={styles.link}>
          <Typography>About</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}