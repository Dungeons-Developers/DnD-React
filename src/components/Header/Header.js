import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { If, Then } from 'react-if'
import {
  // AppBar,
  Toolbar,
  Tooltip,
} from '@material-ui/core';

import theme from '../../theme/theme';

import {toggleTheme} from '../../store/slices/theme-slice';

import Logo from '../Logo';
import Nav from './Nav';

function Header({ token, path, pageTheme, toggleTheme }) {

 

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
    },
    theme: pageTheme === 'dark' ? theme.dark: theme.light
  }

  useEffect(() => {
    styles.theme = pageTheme === 'dark' ? theme.dark: theme.light;
  }, [pageTheme]);


  return (
    <React.Fragment>
      <If condition={token !== null && path !== '/play'}>
        <Then>
          <header position='fixed' style={{...styles.appbar, ...styles.theme.header}}>
            <Toolbar style={styles.toolbar}>
              <Tooltip title='Home'>
                <Link to='/'>
                  <Logo />
                </Link>
              </Tooltip>
              <button onClick={() => toggleTheme(null)}>TOGGLE THEME</button>
              <Nav />
            </Toolbar>
          </header>
        </Then>
      </If>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  token: state.users.token,
  path: state.campaign.campaignPath,
  pageTheme: state.theme.theme
});

const mapDispatchToProps = {toggleTheme}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
