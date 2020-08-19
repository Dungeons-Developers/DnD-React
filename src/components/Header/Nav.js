import React from 'react';

import { Link } from 'react-router-dom';

import { Breadcrumbs, Typography } from '@material-ui/core';



export default function Nav(props) {

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
    </Breadcrumbs>
  )
}

