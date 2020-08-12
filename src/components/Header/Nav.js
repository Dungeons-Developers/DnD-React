import React from 'react';

import {Link} from 'react-router-dom';

import {Box, Button, Breadcrumbs, Typography} from '@material-ui/core';



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
   <Breadcrumbs aria-label="breadcrumb">
     <Link to='/characters' style={styles.link}>
        <Typography >
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
     <Link to='/invites' style={styles.link}>
        <Typography >
          Invites
        </Typography>
     </Link>
   </Breadcrumbs>
  )
}

/*
 <ul style={styles.ul}>
      <Link to='/characters' style={styles.link}>
        <li style={styles.li}>My Characters</li>
      </Link>
      <Link to='/create-campaign' style={styles.link}>
        <li style={styles.li}>Create Campaign</li>
      </Link>
      <Link to='/join-campaign' style={styles.link}>
        <li style={styles.li}>Join Campaign</li>
      </Link>
      <Link to='/invites' style={styles.link}>
        <li style={styles.li}>Invites</li>
      </Link>
    </ul>
*/