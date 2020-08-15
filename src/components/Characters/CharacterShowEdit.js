import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';

import useForm from '../../hooks/useForm';
import { races, classes, weapons, alignment, deity, skills, adventuring_packs, armor } from '../../data/charOptions.json';
import { updateCharacter } from '../../store/slices/character-slice';


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


export function CharacterDetails(props) {
  const styleClasses = useStyles();
  const [tab, setTab] = React.useState(0);
  const { create, user } = props;

  const defaults = {
    user: user,
    name: '',
    class: '',
    race: '',
    alignment: '',
    deity: '',
    skill_1: '',
    skill_2: '',
    armor: '',
    pack: '',
    weapon_1: '',
    weapon_2: '',
    ability_scores: '',
    level: '2',
    isInCampaign: false,
  };

  const { handleChange, handleSubmit, fields } = useForm(defaults);

  function submit(e) {
    e.preventDefault();
    handleSubmit(create);
    e.target.reset();
  }

  function formChange(e) {
    handleChange(e.target.name, e.target.value);
  }

  const handleTab = (event, newValue) => {
    setTab(newValue);
  };
  
  return (
    <div className={styleClasses.root}>
      <AppBar position="static">
        <Tabs value={tab} onChange={handleTab} aria-label="simple tabs example">
          <Tab label="details" {...a11yProps(0)} />
          <Tab label="edit" {...a11yProps(1)} />
          <Tab label="delete" {...a11yProps(2)} />

      
        </Tabs>
      </AppBar>

      {/* need to get charName dynamically populating from store data */}
      <TabPanel value={tab} index={0}>
        <h2 id="simple-modal-title">Char Name {props.Character.name}</h2>
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
      <TabPanel value={tab} index={1}>
      <form className="character-form" autoComplete="off" onSubmit={submit}>

       
      <Grid container spacing={3}>
      {/* NAME CHANGE */}
      <Grid item xs={12}>
                <TextField
                  id="update-character-name"
                  name='name'
                  label="Name"
                  onChange={formChange}
                  fullWidth
                  helperText="Update your name"
                />
              </Grid>

      {/* ABILITY SCORES CHANGE */}
      <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
                <TextField
                  id="character-ability-score"
                  name="abilityScore"
                  label="Ability Scores"
                  fullWidth
                  defaultValue={1}
                />
                <FormHelperText>Update your ability scores</FormHelperText>
                </FormControl>
              </Grid>

      {/* LEVEL CHANGE */}
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
                <TextField
                  id="character-level"
                  name="level"
                  label="Level"
                  fullWidth
                  defaultValue={1}
                />
                <FormHelperText>Update your level</FormHelperText>
                </FormControl>
              </Grid>

      {/* RACE CHANGE */}
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
                  <InputLabel id="update-character-race-label">Race</InputLabel>
                  <Select
                    labelId="update-character-race-label"
                    id="update-character-race"
                    name='race'
                    value={fields.race}
                    onChange={formChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {races.map((value, index) => {
                      return <MenuItem key={index} value={value}>{value}</MenuItem>
                    })}
                  </Select>
                  <FormHelperText>Select a new race</FormHelperText>
                </FormControl>
                </Grid>

      {/* CLASS CHANGE  */}
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
                  <InputLabel id="update-character-class-label">Class</InputLabel>
                  <Select
                    labelId="update-character-class-label"
                    id="update-character-class"
                    name='class'
                    value={fields.class}
                    onChange={formChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {classes.map((value, index) => {
                      return <MenuItem key={index} value={value}>{value}</MenuItem>
                    })}
                  </Select>
                  <FormHelperText>Select a new class</FormHelperText>
                </FormControl>
                </Grid>
    
      {/* ALIGNMENT CHANGE  */}
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
                  <InputLabel id="update-character-alignment-label">Alignment</InputLabel>
                  <Select
                    labelId="update-character-alignment-label"
                    id="update-character-alignment"
                    name='alignment'
                    value={fields.alignment}
                    onChange={formChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {alignment.map((value, index) => {
                      return <MenuItem key={index} value={value}>{value}</MenuItem>
                    })}
                  </Select>
                  <FormHelperText>Select a new alignment</FormHelperText>
                </FormControl>
                </Grid>

      {/* DEITY CHANGE  */}
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
                  <InputLabel id="update-character-deity-label">Deity</InputLabel>
                  <Select
                    labelId="update-character-deity-label"
                    id="update-character-deity"
                    name='deity'
                    value={fields.deity}
                    onChange={formChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {deity.map((value, index) => {
                      return <MenuItem key={index} value={value}>{value}</MenuItem>
                    })}
                  </Select>
                  <FormHelperText>Select a new deity</FormHelperText>
                </FormControl>
                </Grid>

      {/* SKILL1 CHANGE  */}
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
                  <InputLabel id="update-character-skill-one-label">Skill 1</InputLabel>
                  <Select
                    labelId="update-character-skill-one-label"
                    id="update-character-skill-one"
                    name='skill_1'
                    value={fields.skill_1}
                    onChange={formChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {skills.map((value, index) => {
                      return <MenuItem key={index} value={value}>{value}</MenuItem>
                    })}
                  </Select>
                  <FormHelperText>Select a new proficiency</FormHelperText>
                </FormControl>
                </Grid>

      {/* SKILL2 CHANGE  */}
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
                  <InputLabel id="update-character-skill-two-label">Skill 2</InputLabel>
                  <Select
                    labelId="update-character-skill-two-label"
                    id="update-character-skill-two"
                    name='skill_2'
                    value={fields.skill_2}
                    onChange={formChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {skills.map((value, index) => {
                      return <MenuItem key={index} value={value}>{value}</MenuItem>
                    })}
                  </Select>
                  <FormHelperText>Select a new proficiency</FormHelperText>
                </FormControl> 
                </Grid>
                
        {/* ARMOR CHANGE */}
        <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
                  <InputLabel id="update-character-armor-label">Armor</InputLabel>
                  <Select
                    labelId="update-character-armor-label"
                    id="update-character-armor"
                    name='armor'
                    value={fields.armor}
                    onChange={formChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {armor.map((value, index) => {
                      return <MenuItem key={index} value={value}>{value}</MenuItem>
                    })}
                  </Select>
                  <FormHelperText>Select a new armor type</FormHelperText>
                </FormControl>
                </Grid>

        {/* PACK CHANGE */}
          <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel id="update-character-pack-label">Adventure Pack</InputLabel>
                  <Select
                    labelId="update-character-pack-label"
                    id="update-character-pack"
                    name='pack'
                    value={fields.pack}
                    onChange={formChange}
                    required
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {adventuring_packs.map((value, index) => {
                      return <MenuItem key={index} value={value}>{value}</MenuItem>
                    })}
                  </Select>
                  <FormHelperText>Select a new adventure pack</FormHelperText>
                </FormControl>
              </Grid>

        {/* WEAPON 1 */}
          <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel id="update-character-weapon-one-label">Weapon #1</InputLabel>
                  <Select
                    labelId="update-character-weapon-one-label"
                    id="update-character-weapon-one"
                    name='weapon_1'
                    value={fields.weapon_1}
                    onChange={formChange}
                    required
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {weapons.map((value, index) => {
                      return <MenuItem key={index} value={value}>{value}</MenuItem>
                    })}
                  </Select>
                </FormControl>
              </Grid>

        {/* WEAPON 2 */}
          <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel id="update-character-weapon-two-label">Weapon #2</InputLabel>
                  <Select
                    labelId="update-character-weapon-two-label"
                    id="update-character-weapon-two"
                    name='weapon_2'
                    value={fields.weapon_2}
                    onChange={formChange}
                    required
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {weapons.map((value, index) => {
                      return <MenuItem key={index} value={value}>{value}</MenuItem>
                    })}
                  </Select>
                </FormControl>
              </Grid>
       <br/>
       <br/>
        <TextField id="outlined-basic" label="Bio:" multiline rows={4} fullWidth variant="outlined"/><br/><br/><br/>
        <Grid item xs={12}>
        <Button fullWidth color="primary" variant="contained" type="submit">
          Save
        </Button>
        </Grid>
        </Grid>
        </form>
      </TabPanel>

      <TabPanel value={tab} index={2}>
        <h2 id="simple-modal-title">Delete {props.Character.name}?</h2>
        
      </TabPanel>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.users.user
})

const mapDispatchToProps = {
  create: updateCharacter,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails);