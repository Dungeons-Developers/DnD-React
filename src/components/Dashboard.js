import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import PeopleIcon from '@material-ui/icons/People';
import Typography from '@material-ui/core/Typography';

function Dashboard({ user }) {

  return (
    <Box
      display="flex"
      flex="1"
      justifyContent="center"
      alignItems="center"
      flexDirection='column'
    >

      <Typography variant="h2">Welcome {user.username}</Typography>
      <Box
        display="flex"
        flex="1"
        justifyContent="center"
        alignItems="center"
      >
        <Box mx=".5rem">
          <Typography align='center' variant='overline' component='p'>Create Character</Typography>
          <Tooltip title='Create Character'>
            <Link to='/create-character'>
              <Paper elevation={3}>
                <Box p="3rem" >
                  <IconButton aria-label="Create Character">
                    <PersonAddIcon style={{ fill: '#BE2224' }} />
                  </IconButton>
                </Box>
              </Paper>
            </Link>
          </Tooltip>
        </Box>
        <Box mx=".5rem">
          <Typography align='center' variant='overline' component='p'>Join Campaign</Typography>
          <Tooltip title='Join Campaign'>
            <Link to='/join'>
              <Paper elevation={3}>
                <Box p="3rem">
                  <IconButton aria-label="Join Campaign">
                    <PeopleIcon style={{ fill: '#BE2224' }} />
                  </IconButton>
                </Box>
              </Paper>
            </Link>
          </Tooltip>
        </Box>
        <Box mx=".5rem">
          <Typography align='center' variant='overline' component='p'>Create Campaign</Typography>
          <Tooltip title='Create Campaign'>
            <Link to='/create-campaign'>
              <Paper elevation={3}>
                <Box p="3rem">

                  <IconButton aria-label="Create Campaign">
                    <AddToQueueIcon style={{ fill: '#BE2224' }} />
                  </IconButton>
                </Box>
              </Paper>
            </Link>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  user: state.users.user
});

export default connect(mapStateToProps)(Dashboard);