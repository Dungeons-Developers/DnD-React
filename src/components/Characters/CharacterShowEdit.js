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
import { If } from 'react-if';
import useForm from '../../hooks/useForm';
import { races, classes, weapons, alignment, deity, skills, adventuring_packs, armor } from '../../data/charOptions.json';
import { updateCharacter, deleteCharacter } from '../../store/slices/character-slice';
import '../../styles/index.scss';
import {withStyles} from '@material-ui/core';
import {red} from '@material-ui/core/colors';
import theme from '../../theme/theme';

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
}))(Button);

const CssTextField = withStyles({
  root: {

    '& label.Mui-focused': {
      color: 'inherit',
    },
    '& label': {
      color: 'inherit',
    },
    '& .MuiInput-underline:after': {
      color: 'inherit',
      borderBottomColor: 'inherit',
    },
    '& .MuiInput-underline': {
      color: 'inherit',
    },
    '& .MuiOutlinedInput-root': {
      color: 'inherit',
      '& fieldset': {
        borderColor: 'inherit',
      },
      '&.Mui-focused fieldset': {
        color: 'inherit',
        borderColor: 'inherit',
      },
    },
  },
})(TextField);


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
    overflow: "scroll"
  },
}));


export function CharacterDetails(props) {

  const styleClasses = useStyles();
  const [tab, setTab] = React.useState(0);
  const { user, remove, pageTheme, update } = props;

  const style = {
    theme: pageTheme === 'dark' ? theme.dark : theme.light,
    color: {
      color: 'inherit'
    },
    flow: {
      overflow: 'scroll'
    }
  }

  const defaults = {
    user: user,
    name: props.Character ? props.Character.name : '',
    class: props.Character ? props.Character.class : '',
    race: props.Character ? props.Character.race : '',
    alignment: props.Character ? props.Character.alignment : '',
    deity: props.Character ? props.Character.deity : '',
    skill_1: props.Character ? props.Character.skill_1 : '',
    skill_2: props.Character ? props.Character.skill_2 : '',
    armor: props.Character ? props.Character.armor : '',
    pack: props.Character ? props.Character.pack : '',
    weapon_1: props.Character ? props.Character.weapon_1 : '',
    weapon_2: props.Character ? props.Character.weapon_2 : '',
    // ability_scores: '',
    str: props.Character ? props.Character.str : '',
    dex: props.Character ? props.Character.dex : '',
    con: props.Character ? props.Character.con : '',
    int: props.Character ? props.Character.int : '',
    wis: props.Character ? props.Character.wis : '',
    cha: props.Character ? props.Character.cha : '',
    level: props.Character ? props.Character.level : '',
    _id: props.Character ? props.Character._id : '',
    // isInCampaign: false,
  };

  const { handleChange, handleSubmit, fields } = useForm(defaults);

  function editSubmit(e) {
    e.preventDefault();
    handleSubmit(update);
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
      <AppBar position="static" style={{ ...style.theme.accent, ...style.flow }}>

        <Tabs value={tab} onChange={handleTab} aria-label="simple tabs example" style={{ ...style.theme.header, ...style.theme, ...style.theme.color }}>
          <Tab label="details" {...a11yProps(0)} />
          {props.edit && <Tab label="edit" {...a11yProps(1)} />}
          {props.delete && <Tab label="delete" {...a11yProps(2)} />}
        </Tabs>
      </AppBar>

      {/* need to get charName dynamically populating from store data */}
      {/* DETAILS TAB  */}
      <TabPanel value={tab} index={0} style={{ ...style.theme.accent, ...style.theme, ...style.flow, ...style.color }}>
        <h2 id="simple-modal-title" style={style.theme.color}>{props.Character.name}</h2>
        <p className="charStats" style={style.theme.color}>Level: {props.Character.level} </p>
        <p className="charStats" style={style.theme.color}>Race: {props.Character.race}</p>
        <p className="charStats" style={style.theme.color}>Class: {props.Character.class}</p>
        <p className="charStats" style={style.theme.color}>Alignment: {props.Character.alignment}</p>
        <p className="charStats" style={style.theme.color}>Deity: {props.Character.deity}</p>
        <p className="charStats" style={style.theme.color}>Proficiencies: Skill 1: {props.Character.skill_1}  Skill 2: {props.Character.skill_2}</p>
        <p className="charStats" style={style.theme.color}>Ability Scores:<br />
        STR: {props.Character.str}<br />
        DEX: {props.Character.dex}<br />
        CON: {props.Character.con}<br />
        INT: {props.Character.int}<br />
        WIS: {props.Character.wis}<br />
        CHA: {props.Character.cha}
        </p>
        <p className="charEquip" style={style.theme.color}>Equipment:<br />
         Pack: {props.Character.pack}
         Armor: {props.Character.armor}
         Weapon 1: {props.Character.weapon_1}
         Weapon 2: {props.Character.weapon_2}</p>
        <p id="simple-modal-description" style={style.theme.color}>
          {/* Bio: 
        {props.Character.bio ? props.Character.bio : " This character has a mysterious past, yet to be written."} */}
        </p>
      </TabPanel>
      {/* Make text fields dropdowns where necessary 
      Add onChange handlers for each text field
      Add useForm hook to trigger on that onChange from the button submit
      */}

      {/* UPDATE TAB  */}
      <If condition={props.edit}>
        <TabPanel value={tab} index={1} style={{...style.theme.accent, ...style.theme.color}}>
          <form className="character-edit-form" autoComplete="off" onSubmit={editSubmit} style={{...style.theme.accent, ...style.color}}>

            <Grid container spacing={3}>
              {/* NAME CHANGE */}
              <Grid item xs={12}>
                <CssTextField
                  id="update-character-name"
                  name='name'
                  label={props.Character.name}
                  onChange={formChange}
                  fullWidth
                  placeholder={props.Character.name}
                  helperText="Update your name"
                />
              </Grid>

              {/* ABILITY SCORES CHANGE
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
              </Grid> */}

              {/* LEVEL CHANGE */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <CssTextField
                    id="character-level"
                    name="level"
                    label="Level"
                    fullWidth
                    defaultValue={props.Character.level}
                    type="number"
                    onChange={formChange}
                  />
                  <FormHelperText>Update your level</FormHelperText>
                </FormControl>
              </Grid>

              {/* RACE CHANGE */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="update-character-race-label" style={{...style.color}}>{props.Character.race}</InputLabel>
                  <Select
                    labelId="update-character-race-label"
                    id="update-character-race"
                    name='race'
                    placeholder={props.Character.race}
                    value={fields.race}
                    onChange={formChange}
                    style={style.theme.color}
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
                  <InputLabel id="update-character-class-label" style={{...style.color}}>{props.Character.class}</InputLabel>
                  <Select
                    labelId="update-character-class-label"
                    id="update-character-class"
                    name='class'
                    placeholder={props.Character.class}
                    value={fields.class}
                    onChange={formChange}
                    style={style.theme.color}
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
                  <InputLabel id="update-character-alignment-label" style={{...style.color}}>{props.Character.alignment}</InputLabel>
                  <Select
                    labelId="update-character-alignment-label"
                    id="update-character-alignment"
                    name='alignment'
                    placeholder={props.Character.alignment}
                    value={fields.alignment}
                    onChange={formChange}
                    style={style.theme.color}
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
                  <InputLabel id="update-character-deity-label" style={{...style.color}}>{props.Character.deity}</InputLabel>
                  <Select
                    labelId="update-character-deity-label"
                    id="update-character-deity"
                    name="deity"
                    placeholder={props.Character.deity}
                    value={fields.deity}
                    onChange={formChange}
                    style={style.theme.color}
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
                  <InputLabel id="update-character-skill-one-label" style={{...style.color}}>Skill 1</InputLabel>
                  <Select
                    labelId="update-character-skill-one-label"
                    id="update-character-skill-one"
                    name="skill_1"
                    placeholder={props.Character.skill_1}
                    value={fields.skill_1}
                    onChange={formChange}
                    style={style.theme.color}
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
                  <InputLabel id="update-character-skill-two-label" style={{...style.color}}>Skill 2</InputLabel>
                  <Select
                    labelId="update-character-skill-two-label"
                    id="update-character-skill-two"
                    name='skill_2'
                    placeholder={props.Character.skill_2}
                    value={fields.skill_2}
                    onChange={formChange}
                    style={style.theme.color}
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
                  <InputLabel id="update-character-armor-label" style={{...style.color}}>Armor</InputLabel>
                  <Select
                    labelId="update-character-armor-label"
                    id="update-character-armor"
                    name='armor'
                    placeholder={props.Character.armor}
                    value={fields.armor}
                    onChange={formChange}
                    style={style.theme.color}
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
                  <InputLabel id="update-character-pack-label" style={{...style.color}}>Adventure Pack</InputLabel>
                  <Select
                    labelId="update-character-pack-label"
                    id="update-character-pack"
                    name='pack'
                    placeholder={props.Character.pack}
                    value={fields.pack}
                    onChange={formChange}
                    style={style.theme.color}
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
                  <InputLabel id="update-character-weapon-one-label" style={{...style.color}}>Weapon #1</InputLabel>
                  <Select
                    labelId="update-character-weapon-one-label"
                    id="update-character-weapon-one"
                    name='weapon_1'
                    placeholder={props.Character.weapon_1}
                    value={fields.weapon_1}
                    onChange={formChange}
                    style={style.theme.color}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {weapons.map((value, index) => {
                      return <MenuItem key={index} value={value}>{value}</MenuItem>
                    })}
                  </Select>
                  <FormHelperText>Select a new weapon 1</FormHelperText>
                </FormControl>
              </Grid>

              {/* WEAPON 2 */}
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel id="update-character-weapon-two-label" style={{...style.color}}>Weapon #2</InputLabel>
                  <Select
                    labelId="update-character-weapon-two-label"
                    id="update-character-weapon-two"
                    name='weapon_2'
                    placeholder={props.Character.weapon_2}
                    value={fields.weapon_2}
                    onChange={formChange}
                    style={style.theme.color}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {weapons.map((value, index) => {
                      return <MenuItem key={index} value={value}>{value}</MenuItem>
                    })}
                  </Select>
                  <FormHelperText>Select a new weapon 2</FormHelperText>
                </FormControl>
              </Grid>
              <br />
              <br />
              {/* BIO
           <Grid item xs={12} sm={12} >
                <FormControl fullWidth>
                  <InputLabel id="update-character-bio"></InputLabel>
                  <TextField
                    id="outlined-basic"
                    label="Bio:"
                    name='bio'
                    placeholder={props.Character.bio}
                    multiline rows={4}
                    fullWidth variant="outlined"
                    onChange={formChange}
                  />
                  <FormHelperText>Edit your bio</FormHelperText>
                </FormControl>
              </Grid> */}
              <Grid item xs={12}>
                <ColorButton fullWidth color="primary" variant="contained" type="submit" >
                  Save
                </ColorButton>
              </Grid>
            </Grid>
          </form>
        </TabPanel>
      </If>
      {/* DELETE TAB */}
      <If condition={props.delete}>
        <TabPanel value={tab} index={2} style={{...style.theme.accent, ...style.color}}>
          <h2 id="simple-modal-title" style={style.theme.color}>Delete {props.Character.name}?</h2>
          <form className="character-delete-form" style={{...style.theme.accent, ...style.color}} autoComplete="off" onSubmit={(e) => {
            e.preventDefault();
            remove(props.Character);

          }}>
            <ColorButton fullWidth color="primary" variant="contained" type="submit" >
              Delete
            </ColorButton>
          </form>
        </TabPanel>
      </If>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.users.username,
  pageTheme: state.theme.theme
})

const mapDispatchToProps = {
  update: updateCharacter,
  remove: deleteCharacter,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails);