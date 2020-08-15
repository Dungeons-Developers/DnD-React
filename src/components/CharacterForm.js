import React from 'react';
import { connect } from 'react-redux';
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

import { createCharacter } from '../store/slices/character-slice';

import { races, classes, weapons, alignment, deity, skills, adventuring_packs, armor } from '../data/charOptions.json';

function CharacterForm(props) {

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
    level: '1',
    isInCampaign: false,
  };

  const { handleChange, handleSubmit, fields } = useForm(defaults);

  function submit(e) {
    e.preventDefault();
    handleSubmit(create);
    e.target.reset();
    window.location.replace('/characters');
  }

  function formChange(e) {
    handleChange(e.target.name, e.target.value);
  }

  return (
    <>
    <Box mt="0.5rem">
      <Paper square>
        <Box p='1rem'>
          <form className="character-form" autoComplete="off" onSubmit={submit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  id="create-character-name"
                  name='name'
                  label="Name"
                  onChange={formChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="create-character-race-label">Race</InputLabel>
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
                  <InputLabel id="create-character-class-label">Class</InputLabel>
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
                  <InputLabel id="create-character-alignment-label">Alignment</InputLabel>
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
                  <InputLabel id="create-character-deity-label">Deity</InputLabel>
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
                  <InputLabel id="create-character-skill-one-label">Proficient Skill #1</InputLabel>
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
                  <InputLabel id="create-character-skill-two-label">Proficient Skill #2</InputLabel>
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
                  <InputLabel id="create-character-armor-label">Armor</InputLabel>
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
                  <InputLabel id="create-character-pack-label">Adventure Pack</InputLabel>
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
                  <InputLabel id="create-character-weapon-one-label">Weapon #1</InputLabel>
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
                  <InputLabel id="create-character-weapon-two-label">Weapon #2</InputLabel>
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
              <Grid item xs={12} sm={6}>
                {/* TODO: Roll for Ability Scores */}
                <TextField
                  id="character-ability-score"
                  name="abilityScore"
                  label="Ability Scores"
                  disabled
                  fullWidth
                  defaultValue="ABILITY SCORE ROLL WILL GO HERE"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="character-level"
                  name="level"
                  label="Level"
                  disabled
                  fullWidth
                  defaultValue={1}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  type='submit'
                >
                  Create
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper >
    </Box>
     </>
  )
}

const mapStateToProps = state => ({
  user: state.users.username
})

const mapDispatchToProps = {
  create: createCharacter,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterForm);