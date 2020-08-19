import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { If, Then } from 'react-if'

import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'

import theme from '../../theme/theme';

function Footer({ pageTheme, token, path }) {

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
      color: 'inherit'
    },
    theme: pageTheme === 'dark' ? theme.dark : theme.light
  }

  useEffect(() => {
    styles.theme = pageTheme === 'dark' ? theme.dark : theme.light;
  }, [pageTheme]);

  return (
    <If condition={token !== null && path !== '/play'}>
      <Then>
        <div style={{ ...styles.footer, ...styles.theme.header }} className='footer'>
          <div style={styles.toolbar}>
            <Typography component='p' style={styles.link}>&copy; Dungeons & Developers</Typography>
            <Link to='/about' style={styles.link}>
              <Typography>About</Typography>
            </Link>
          </div>
        </div>
      </Then>
    </If>

  )
}

const mapStateToProps = state => {
  return {
    token: state.users.token,
    path: state.campaign.campaignPath,
    pageTheme: state.theme.theme
  }
}

export default connect(mapStateToProps)(Footer)