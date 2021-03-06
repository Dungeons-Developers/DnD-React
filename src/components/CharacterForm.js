import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom"
import { If, Then, Else } from 'react-if';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import useForm from '../hooks/useForm';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Dice from '../components/Dice';

import { createCharacter, insertScore, disableScore, removeScore } from '../store/slices/character-slice';

import { races, classes, weapons, alignment, deity, skills, adventuring_packs, armor } from '../data/charOptions.json';
import { Typography } from '@material-ui/core';

import theme from '../theme/theme';

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

function CharacterForm(props) {

  const { scoreOptions, create, user, disableScore, disabledScores, pageTheme } = props;

  const [submitted, setSubmitted] = useState(false)

  const styles = {
    menu: {
      width: '150px',
    },
    grid: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    theme: pageTheme === 'dark' ? theme.dark : theme.light,
    color: {
      color: 'inherit'
    }
  }

  const defaults = {
    user: user,
    name: '',
    class: '',
    race: '',
    health: '50',
    alignment: '',
    deity: '',
    skill_1: '',
    skill_2: '',
    armor: '',
    pack: '',
    weapon_1: '',
    weapon_2: '',
    str: '',
    dex: '',
    con: '',
    int: '',
    wis: '',
    cha: '',
    level: '1',
    isInCampaign: false,
  };

  const { handleChange, handleSubmit, fields } = useForm(defaults);

  function tryAddScore(num) {
    props.addScore(num);
  }

  function submit(e) {
    e.preventDefault();
    handleSubmit(create);
    e.target.reset();
    setSubmitted(true);
  }

  function formChange(e) {
    handleChange(e.target.name, e.target.value);
  }

  function abilityFormChange(e) {
    handleChange(e.target.name, e.target.value);
    disableScore(e.currentTarget.dataset.idx);
  }

  return (
    <If condition={submitted === false}>
      <Then>
        <Container maxWidth='lg'>
        <Box mt="0.5rem">
          <Paper square style={{ ...styles.theme.accent, ...styles.color }}>
            <Box p='1rem'>
              <form className="character-form" autoComplete="off" onSubmit={submit} style={styles.color}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <CssTextField
                      id="create-character-name"
                      name='name'
                      label="Name"
                      onChange={formChange}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth >
                      <InputLabel id="create-character-race-label" style={{...styles.color}}>Race</InputLabel>
                      <Select
                        labelId="create-character-race-label"
                        id="create-character-race"
                        name='race'
                        value={fields.race}
                        onChange={formChange}
                        required
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {races.map((value, index) => {
                          return <MenuItem key={index} value={value}>{value}</MenuItem>
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id="create-character-class-label" style={{...styles.color}}>Class</InputLabel>
                      <Select
                        labelId="create-character-class-label"
                        id="create-character-class"
                        name='class'
                        value={fields.class}
                        onChange={formChange}
                        required
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {classes.map((value, index) => {
                          return <MenuItem key={index} value={value}>{value}</MenuItem>
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id="create-character-alignment-label" style={{...styles.color}}>Alignment</InputLabel>
                      <Select
                        labelId="create-character-alignment-label"
                        id="create-character-alignment"
                        name='alignment'
                        value={fields.alignment}
                        onChange={formChange}
                        required
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {alignment.map((value, index) => {
                          return <MenuItem key={index} value={value}>{value}</MenuItem>
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id="create-character-deity-label" style={{...styles.color}}>Deity</InputLabel>
                      <Select
                        labelId="create-character-deity-label"
                        id="create-character-deity"
                        name='deity'
                        value={fields.deity}
                        onChange={formChange}
                        required
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {deity.map((value, index) => {
                          return <MenuItem key={index} value={value}>{value}</MenuItem>
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id="create-character-skill-one-label" style={{...styles.color}}>Proficient Skill #1</InputLabel>
                      <Select
                        labelId="create-character-skill-one-label"
                        id="create-character-skill-one"
                        name='skill_1'
                        value={fields.skill_1}
                        onChange={formChange}
                        required
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {skills.map((value, index) => {
                          return <MenuItem key={index} value={value}>{value}</MenuItem>
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id="create-character-skill-two-label" style={{...styles.color}}>Proficient Skill #2</InputLabel>
                      <Select
                        labelId="create-character-skill-two-label"
                        id="create-character-skill-two"
                        name='skill_2'
                        value={fields.skill_2}
                        onChange={formChange}
                        required
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {skills.map((value, index) => {
                          return <MenuItem key={index} value={value}>{value}</MenuItem>
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id="create-character-armor-label" style={{...styles.color}}>Armor</InputLabel>
                      <Select
                        labelId="create-character-armor-label"
                        id="create-character-armor"
                        name='armor'
                        value={fields.armor}
                        onChange={formChange}
                        required
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {armor.map((value, index) => {
                          return <MenuItem key={index} value={value}>{value}</MenuItem>
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id="create-character-pack-label" style={{...styles.color}}>Adventure Pack</InputLabel>
                      <Select
                        labelId="create-character-pack-label"
                        id="create-character-pack"
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
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id="create-character-weapon-one-label" style={{...styles.color}}>Weapon #1</InputLabel>
                      <Select
                        labelId="create-character-weapon-one-label"
                        id="create-character-weapon-one"
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
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id="create-character-weapon-two-label" style={{...styles.color}}>Weapon #2</InputLabel>
                      <Select
                        labelId="create-character-weapon-two-label"
                        id="create-character-weapon-two"
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

                  <Grid item xs={12} sm={6} style={{ maxHeight: '300px', minHeight: '200px' }}>
                    <Dice insertScore={tryAddScore} scoreOptions={scoreOptions} />
                  </Grid>

                  <Grid item xs={12} sm={6} style={{ maxHeight: '300px', minHeight: '200px' }}>
                    <Typography>You rolled a...</Typography>
                    {scoreOptions.map((value, index) => {
                      return <Typography key={index} value={value}>{value}</Typography>
                    })}
                  </Grid>

                  <Grid item xs={12} direction='row' style={styles.grid}>
                    <FormControl style={styles.menu}>
                      <InputLabel id="create-character-ability-str-label" style={{...styles.color}}>Strength</InputLabel>
                      <Select
                        labelId="create-character-ability-str"
                        id="create-character-ability-str"
                        name='str'
                        value={fields.str}
                        onChange={abilityFormChange}
                        required
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {scoreOptions.map((value, index) => {
                          return <MenuItem key={index} data-idx={index} disabled={disabledScores.includes(index) ? true : false} value={value}>{value}</MenuItem>
                        })}
                      </Select>
                    </FormControl>

                    <FormControl style={styles.menu}>
                      <InputLabel id="create-character-ability-dex-label" style={{...styles.color}}>Dexterity</InputLabel>
                      <Select
                        labelId="create-character-ability-dex"
                        id="create-character-ability-dex"
                        name='dex'
                        value={fields.dex}
                        onChange={abilityFormChange}
                        required
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {scoreOptions.map((value, index) => {
                          return <MenuItem key={index} data-idx={index} disabled={disabledScores.includes(index) ? true : false} value={value}>{value}</MenuItem>
                        })}
                      </Select>
                    </FormControl>

                    <FormControl style={styles.menu}>
                      <InputLabel id="create-character-ability-con-label" style={{...styles.color}}>Constitution</InputLabel>
                      <Select
                        labelId="create-character-ability-con"
                        id="create-character-ability-con"
                        name='con'
                        value={fields.con}
                        onChange={abilityFormChange}
                        required
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {scoreOptions.map((value, index) => {
                          return <MenuItem key={index} data-idx={index} disabled={disabledScores.includes(index) ? true : false} value={value}>{value}</MenuItem>
                        })}
                      </Select>
                    </FormControl>

                    <FormControl style={styles.menu}>
                      <InputLabel id="create-character-ability-int-label" style={{...styles.color}}>Intelligence</InputLabel>
                      <Select
                        labelId="create-character-ability-int"
                        id="create-character-ability-int"
                        name='int'
                        value={fields.int}
                        onChange={abilityFormChange}
                        required
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {scoreOptions.map((value, index) => {
                          return <MenuItem key={index} data-idx={index} disabled={disabledScores.includes(index) ? true : false} value={value}>{value}</MenuItem>
                        })}
                      </Select>
                    </FormControl>

                    <FormControl style={styles.menu}>
                      <InputLabel id="create-character-ability-wis-label" style={{...styles.color}}>Wisdom</InputLabel>
                      <Select
                        labelId="create-character-ability-wis"
                        id="create-character-ability-wis"
                        name='wis'
                        value={fields.wis}
                        onChange={abilityFormChange}
                        required
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {scoreOptions.map((value, index) => {
                          return <MenuItem key={index} data-idx={index} disabled={disabledScores.includes(index) ? true : false} value={value}>{value}</MenuItem>
                        })}
                      </Select>
                    </FormControl>

                    <FormControl style={styles.menu}>
                      <InputLabel id="create-character-ability-cha-label" style={{...styles.color}}>Charisma</InputLabel>
                      <Select
                        labelId="create-character-ability-cha"
                        id="create-character-ability-cha"
                        name='cha'
                        value={fields.cha}
                        onChange={abilityFormChange}
                        required
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {scoreOptions.map((value, index) => {
                          return <MenuItem key={index} data-idx={index} disabled={disabledScores.includes(index) ? true : false} value={value}>{value}</MenuItem>
                        })}
                      </Select>
                    </FormControl>

                  </Grid>

                  <Grid item xs={12}>
                    <ColorButton
                      variant="contained"
                      fullWidth
                      color="primary"
                      type='submit'
                    >
                      Create
                </ColorButton>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Paper >
        </Box>
        </Container>
      </Then>
      <Else>
        <Redirect to={{ pathname: "/characters" }} />
      </Else>
    </If>
  )
}

const mapStateToProps = state => ({
  user: state.users.username,
  scoreOptions: state.characters.score_options,
  disabledScores: state.characters.disabled_scores,
  pageTheme: state.theme.theme
})

const mapDispatchToProps = {
  create: createCharacter,
  addScore: insertScore,
  disableScore: disableScore,
  removeScore: removeScore
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterForm);