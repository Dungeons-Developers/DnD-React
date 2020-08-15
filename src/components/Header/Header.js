import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { If, Then } from 'react-if'
import {
  AppBar,
  Toolbar,
  Tooltip,
} from '@material-ui/core';

import Logo from '../Logo';
import Nav from './Nav';

function Header({ token }) {
  const styles = {
    appbar: {
      backgroundColor: 'inherit',
      display: 'flex'
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }
  return (
    <React.Fragment>
      <If condition={token}>
        <Then>
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
          <Toolbar />
        </Then>
      </If>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  token: state.users.token
});

export default connect(mapStateToProps)(Header)
