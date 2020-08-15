import React from 'react';
import {Link} from 'react-router-dom';
import {
  // AppBar,
  Toolbar,
  Tooltip,
} from '@material-ui/core';

import Logo from '../Logo';
import Nav from './Nav';

export default function Header(props) {

  const styles = {
    appbar: {
      backgroundColor: 'inherit',
      display: 'flex',
      // position: 'sticky',
      boxShadow: '0 6px 6px -6px black',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
    }
  }

  return (
    <React.Fragment>
    <header position='fixed' style={styles.appbar}>
      <Toolbar style={styles.toolbar}>
        <Tooltip title='Home'>
          <Link to='/home'>
            <Logo />
          </Link>
        </Tooltip>
        <Nav />
      </Toolbar>
    </header>
    {/* <Toolbar /> */}
    </React.Fragment>
  )
}