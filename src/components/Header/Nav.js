import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { Breadcrumbs, Typography } from '@material-ui/core';

import { logout } from '../../store/slices/user-slice'


function Nav({ logout }) {

  const styles = {
    ul: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '50%',
      listStyleType: 'none'
    },
    li: {
      padding: '0 10px',
      margin: '0'
    },
    link: {
      textDecoration: 'none',
      color: 'inherit'
    },
    logout: {
      textDecoration: 'none',
      color: 'inherit',
      cursor: 'pointer',
    }
  }

  return (
    <Breadcrumbs aria-label="breadcrumb" style={styles.link}>
      <Link to='/characters' style={styles.link}>
        <Typography style={styles.link}>
          My Characters
        </Typography>
      </Link>
      <Link to='/create-campaign' style={styles.link}>
        <Typography >
          Create Campaign
        </Typography>
      </Link>
      <Link to='/join' style={styles.link}>
        <Typography >
          Join Campaign
        </Typography>
      </Link>
      <Typography style={styles.logout} onClick={() => logout(null)}>
        Logout
      </Typography>
    </Breadcrumbs>
  )
}

const mapDispatchToProps = {
  logout,
}

export default connect(null, mapDispatchToProps)(Nav)