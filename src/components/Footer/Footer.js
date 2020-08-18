import React from 'react';

import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom'

export default function Footer() {

  const styles = {
    footer: {
      width: '100%',
      padding: '1rem',
      backgroundColor: 'inherit',
      height: '3rem',
      display: 'flex',
      justifyContent: 'center'
      
    },
    toolbar: {
      width: '100%',
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
    <div style={styles.footer} className='footer'>
      <div style={styles.toolbar}>
        <Typography component='p' style={styles.link}>&copy; Dungeons & Developers</Typography>
        <Link to='/about' style={styles.link}>
          <Typography>About</Typography>
        </Link>
      </div>
    </div>
  )
}