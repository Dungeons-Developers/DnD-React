import React from 'react';
import { connect } from 'react-redux';

import useForm from '../hooks/useForm';

import { Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

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


function Roller({socket, campaignCharacters, user, campaignID, playerChar, pageTheme}) {

  const defaults = {
    type: '',
    number: ''
  }

  function submit(e) {
    e.preventDefault();

    console.log('submit');

    let sum = 0;

    for (let i = 0; i < fields.number; i++) {
      sum += Math.ceil((Math.random() * fields.type));
    }
    console.log('sum:', sum);

    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes();

    socket.emit('roll', { time, room: campaignID, char: playerChar, type: fields.type, number: fields.number, total: sum });

    e.target.reset();
  }

  function formChange(e) {
    handleChange(e.target.name, e.target.value);
  }

  // const [playerChar] = useState(campaignCharacters.filter(char => char.user === user)[0]);


  const { handleChange, fields } = useForm(defaults);

  const styles = {
    form: {
      width: '100%',
      minHeight: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column',
    },
    selects: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    options: {
      width: '30%',
      minWidth: '50px'
    },
    theme: pageTheme === 'dark' ? theme.dark : theme.light,
    color: {
      color: 'inherit'
    }
  }

  /* 
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
  */

  return (
    <>
      <div>

      </div>
      <form autoComplete='off' onSubmit={submit} style={{...styles.form, ...styles.color}}>
        <div style={{...styles.selects, ...styles.color}}>

          <FormControl style={{...styles.options, ...styles.color}}>
            <InputLabel id="type" style={styles.color}>Type</InputLabel>
            <Select
              id="type"
              label="Type"
              name='type'
              margin="normal"
              value={fields.type}
              onChange={formChange}
              style={styles.color}
              required
            >
              <MenuItem value={20} default>
                D20
            </MenuItem>
              <MenuItem value={12}>
                D12
            </MenuItem>
              <MenuItem value={10}>
                D10
            </MenuItem>
              <MenuItem value={8}>
                D8
            </MenuItem>
              <MenuItem value={6}>
                D6
            </MenuItem>
              <MenuItem value={4}>
                D4
            </MenuItem>
            </Select>
          </FormControl>
          <FormControl style={styles.options}>
            <InputLabel id="number" style={styles.color}>#</InputLabel>
            <Select
              id="number"
              label="Number"
              name='number'
              color="default"
              margin="normal"
              value={fields.number}
              onChange={formChange}
              style={styles.color}
            >
              <MenuItem value={1} default>
                1
            </MenuItem>
              <MenuItem value={2}>
                2
            </MenuItem>
              <MenuItem value={3}>
                3
            </MenuItem>
              <MenuItem value={4}>
                4
            </MenuItem>
              <MenuItem value={5}>
                5
            </MenuItem>
              <MenuItem value={6}>
                6
            </MenuItem>
            </Select>
          </FormControl>

        </div>
        <ColorButton
          variant="contained"
          color="secondary"
          type="submit"
          margin="normal"
          disabled={!fields.type || !fields.number}
        >
          Roll
      </ColorButton>
      </form>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.users.username,
    campaignCharacters: state.campaign.characters,
    campaignID: state.campaign.campaignID,
    pageTheme: state.theme.theme
  }
}

export default connect(mapStateToProps)(Roller);