import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Player from './testChar.json';
import { Card } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  console.log('charprops', props.Character);
  // need to get dynamic data into the show/edit Card
  // maybe it can't be ina  return object?
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="details" {...a11yProps(0)} />
          <Tab label="edit" {...a11yProps(1)} />
      
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <h2 id="simple-modal-title">Char Name {props.Character.CharacterName}</h2>
        <p className="charStats">Level: </p>
        <p className="charStats">Race: </p>
        <p className="charStats">Class: </p>
        <p className="charStats">Alignment: </p>
        <p className="charStats">Deity: </p>
        <p className="charStats">Proficiencies: </p>
        <p className="charStats">Ability Scores: </p>
        <p className="charStats">Equipment: </p>
        <p id="simple-modal-description">
        BIO COPY: 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </TabPanel>
      {/* Make text fields dropdowns where necessary 
      Add onChange handlers for each text field
      Add useForm hook to trigger on that onChange from the button submit
      */}
      <TabPanel value={value} index={1}>
        <TextField id="outlined-basic" label="Character Name:" placeholder="placeholder" fullWidth variant="outlined"/><br/>
        <TextField id="outlined-basic" label="Level:" /><br/>
        <TextField id="outlined-basic" label="Race:" placeholder="placeholder" /><br />
        <TextField id="outlined-basic" label="Class:" /><br/>
        <TextField id="outlined-basic" label="Alignment:" /><br/>
        <TextField id="outlined-basic" label="Deity:" /><br/>
        <TextField id="outlined-basic" label="Proficiencies:" /><br/>
        <TextField id="outlined-basic" label="Equipment:" /><br/><br/>
        <TextField id="outlined-basic" label="Bio:" multiline rows={4} fullWidth variant="outlined"/><br/><br/>
        <Button size="medium" color="primary" variant="contained">
          Save
        </Button>
      </TabPanel>
    </div>
  );
}
