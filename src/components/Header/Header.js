import React from 'react';
import {Link} from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Tooltip,
} from '@material-ui/core';

import Logo from '../Logo';
import Nav from './Nav';

export default function Header(props) {

  const styles = {
    appbar: {
      backgroundColor: 'inherit',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }

  return (
    <AppBar position='fixed' style={styles.appbar}>
      <Toolbar style={styles.toolbar}>
        <Tooltip title='Home'>
          <Link to='/home'>
            <Logo />
          </Link>
        </Tooltip>
        <Nav />
      </Toolbar>
    </AppBar>
  )
}