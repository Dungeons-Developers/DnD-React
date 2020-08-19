import React from 'react';
import { connect } from 'react-redux';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

import { toggleTheme } from '../../store/slices/theme-slice';

const RedSwitch = withStyles({
  switchBase: {
    color: red[300],
    '&$checked': {
      color: red[500],
    },
    '&$checked + $track': {
      backgroundColor: red[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

function ThemeSwitch({ toggleTheme }) {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    toggleTheme(null);
  }

  return (
    <>
      <FormControlLabel
        control={<RedSwitch checked={checked} onChange={handleChange} name="checked" />}
        label="Toggle Theme"
      />
    </>
  )
}

const mapDispatchToProps = { toggleTheme }

export default connect(null, mapDispatchToProps)(ThemeSwitch)

