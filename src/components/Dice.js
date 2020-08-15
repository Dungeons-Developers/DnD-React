import React from 'react';
import { connect } from 'react-redux';

import ReactDice from 'react-dice-complete';
import 'react-dice-complete/dist/react-dice-complete.css';

import { insertScore } from '../store/slices/character-slice';

import Button from '@material-ui/core/Button';

class RollDice extends React.Component {
  constructor(props) {
    super(props)
    console.log('CONSTRUCTOR PROPS', this.props);
    this.insertScore = props.insertScore
  }

  rollAll() {
    this.reactDice.rollAll()
  }

  rollDoneCallback(num) {
    console.log('CALLBACK PROPS', this.props);
    console.log(`You rolled a ${num}`);
    this.insertScore(num);
  }

  render() {
    return (
      <div>
        <Button
          color="primary"
          variant="contained"
          onClick={this.rollAll.bind(this)}>
            Roll For Ability Scores!
        </Button>

        <ReactDice
          numDice={3}
          rollDone={this.rollDoneCallback}
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

const mapDispatchToProps = {
  insertScore: insertScore,
}

export default connect(null, mapDispatchToProps)(RollDice);
