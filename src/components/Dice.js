import React from 'react';

import ReactDice from 'react-dice-complete';
import 'react-dice-complete/dist/react-dice-complete.css';

import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import {red, gray} from '@material-ui/core/colors';

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
}))(Button);

class RollDice extends React.Component {
  constructor(props) {
    super(props)
  }

  rollAll() {
    this.reactDice.rollAll()
  }

  rollDoneCallback(num) {
    console.log(`You rolled a ${num}`);
    this.props.insertScore(num);
  }

  render() {
    return (
      <div>
        <ColorButton
          color="primary"
          variant="contained"
          disabled={ this.props.scoreOptions.length > 5 ? true : false }
          onClick={this.rollAll.bind(this)}>
            Roll For Ability Scores!
        </ColorButton>

        <ReactDice
          numDice={3}
          rollDone={this.rollDoneCallback.bind(this)}
          margin={25}
          outline={true}
          outlineColor='#000'
          dotColor='#e51022'
          faceColor='#efefef'
          disableIndividual={true}
          ref={dice => this.reactDice = dice}
        />
      </div>
    )
  }
}


export default RollDice;

