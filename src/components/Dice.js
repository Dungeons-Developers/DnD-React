import React from 'react';

import ReactDice from 'react-dice-complete';
import 'react-dice-complete/dist/react-dice-complete.css';


import Button from '@material-ui/core/Button';

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
        <Button
          color="primary"
          variant="contained"
          onClick={this.rollAll.bind(this)}>
            Roll For Ability Scores!
        </Button>

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

