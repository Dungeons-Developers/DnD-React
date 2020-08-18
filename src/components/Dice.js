import React from 'react';
import { connect } from 'react-redux';

import ReactDice from 'react-dice-complete';
import 'react-dice-complete/dist/react-dice-complete.css';

import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';

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
    super(props);
    this.state = { loading: false }
  }

  rollAll() {
    this.setState({loading: true});
    this.reactDice.rollAll()
  }

  rollDoneCallback(num) {
    console.log(`You rolled a ${num}`);
    this.props.insertScore(num);
    this.setState({loading: false});
  }

  render() {
    return (
      <div>
        <ColorButton
          id="rollButton"
          color="primary"
          variant="contained"
          disabled={ this.props.scoreOptions.length > 5 || this.state.loading ? true : false }
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

const mapStateToProps = state => ({
  scoreOptions: state.characters.score_options,
});

export default connect(mapStateToProps)(RollDice);

