import React from 'react';

import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import useForm from '../hooks/useForm';

function CharacterForm(props) {
  const fields = {};

  const { handleChange, handleSubmit } = useForm(fields);

  function submit(e) {
    e.preventDefault();
    handleSubmit();
    e.target.reset();
  }

  function formChange(e) {
    handleChange(e.target.id, e.target.value);
  }

  const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
    }
  }

  return (
    // TODO: will likely need to break the many select menus into components that render the items?

    <form className="character-form" autoComplete="off" onSubmit={submit} style={styles.form}>

      <FormControl>
        <TextField
          id="name"
          label="Name"
          onChange={formChange}
          fullWidth
          required
        />
      </FormControl>

      <FormControl>
        <InputLabel id="create-character-race-label">Race</InputLabel>
          <Select
            labelId="create-character-race-label"
            id="create-character-race"
            onChange={formChange}
            fullWidth
            required
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="human">Human</MenuItem>
            <MenuItem value="elf">Elf</MenuItem>
            <MenuItem value="tiefling">Tiefling</MenuItem>
          </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="create-character-class-label">Class</InputLabel>
          <Select
            labelId="create-character-class-label"
            id="create-character-class"
            onChange={formChange}
            fullWidth
            required
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="bard">Bard</MenuItem>
            <MenuItem value="cleric">Cleric</MenuItem>
            <MenuItem value="warlock">Warlock</MenuItem>
          </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="create-character-alignment-label">Alignment</InputLabel>
          <Select
            labelId="create-character-alignment-label"
            id="create-character-alignment"
            onChange={formChange}
            fullWidth
            required
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="lawfulNeutral">Lawful Neutral</MenuItem>
            <MenuItem value="trueNeutral">True Neutral</MenuItem>
            <MenuItem value="chaoticNeutral">Chaotic Neutral</MenuItem>
          </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="create-character-deity-label">Deity</InputLabel>
          <Select
            labelId="create-character-deity-label"
            id="create-character-deity"
            onChange={formChange}
            fullWidth
            required
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="deity1">deity1</MenuItem>
            <MenuItem value="deity2">deity2</MenuItem>
            <MenuItem value="deity3">deity3</MenuItem>
          </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="create-character-skills-one-label">Proficient Skill #1</InputLabel>
          <Select
            labelId="create-character-skills-one-label"
            id="create-character-skill-one"
            onChange={formChange}
            fullWidth
            required
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="skill1">skill1</MenuItem>
            <MenuItem value="skill2">skill2</MenuItem>
            <MenuItem value="skill3">skill3</MenuItem>
          </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="create-character-skills-two-label">Proficient Skill #2</InputLabel>
          <Select
            labelId="create-character-skills-two-label"
            id="create-character-skill-two"
            onChange={formChange}
            fullWidth
            required
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="skill1">skill1</MenuItem>
            <MenuItem value="skill2">skill2</MenuItem>
            <MenuItem value="skill3">skill3</MenuItem>
          </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="create-character-armor-label">Armor</InputLabel>
          <Select
            labelId="create-character-armor-label"
            id="create-character-armor"
            onChange={formChange}
            fullWidth
            required
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="armor1">armor1</MenuItem>
            <MenuItem value="armor2">armor2</MenuItem>
            <MenuItem value="armor3">armor3</MenuItem>
          </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="create-character-pack-label">Adventure Pack</InputLabel>
          <Select
            labelId="create-character-pack-label"
            id="create-character-pack"
            onChange={formChange}
            fullWidth
            required
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="pack1">pack1</MenuItem>
            <MenuItem value="pack2">pack2</MenuItem>
            <MenuItem value="pack3">pack3</MenuItem>
          </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="create-character-weapon-one-label">Weapon #1</InputLabel>
          <Select
            labelId="create-character-weapon-one-label"
            id="create-character-weapon-one"
            onChange={formChange}
            fullWidth
            required
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="weapon1">weapon1</MenuItem>
            <MenuItem value="weapon2">weapon2</MenuItem>
            <MenuItem value="weapon3">weapon3</MenuItem>
          </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="create-character-weapon-two-label">Weapon #2</InputLabel>
          <Select
            labelId="create-character-weapon-two-label"
            id="create-character-weapon-two"
            onChange={formChange}
            fullWidth
            required
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="weapon1">weapon1</MenuItem>
            <MenuItem value="weapon2">weapon2</MenuItem>
            <MenuItem value="weapon3">weapon3</MenuItem>
          </Select>
      </FormControl>

      {/* TODO: Roll for Ability Scores */}
      <FormControl>
        <TextField 
          id="character-ability-score"
          label="Ability Scores"
          disabled
          fullWidth
          defaultValue="ABILITY SCORE ROLL WILL GO HERE"
        />
      </FormControl>

      <FormControl>
        <TextField 
          id="character-level"
          label="Level"
          disabled
          fullWidth
          defaultValue={1}
        />
      </FormControl>

      <Box my="1rem">
        <Button
          variant="contained"
          fullWidth
          color="primary"
          type='submit' >
          Create
        </Button>
      </Box>

    </form>
  )
}

export default CharacterForm;
