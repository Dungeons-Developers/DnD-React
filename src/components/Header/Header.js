import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { If, Then } from 'react-if'
import {
  // AppBar,
  Toolbar,
  Tooltip,
} from '@material-ui/core';

import Logo from '../Logo';
import Nav from './Nav';

function Header({ token }) {
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
      <If condition={token}>
        <Then>
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
        </Then>
      </If>    
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  token: state.users.token
});

export default connect(mapStateToProps)(Header)
