import React from 'react';
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'


class RollDice extends React.Component {

  rollAll() {
    this.reactDice.rollAll()
  }

  rollDoneCallback(num) {
    console.log(`You rolled a ${num}`)
  }

  render() {
    return (
      <div>
        <button onClick={this.rollAll.bind(this)}>Roll All</button>
        <ReactDice
          numDice={3}
          rollDone={this.rollDoneCallback}
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









// function RollDice() {
 
//   function rollAll() {
//     // reactDice.rollAll()
//   }
 
//   function rollDoneCallback(num) {
//     console.log(`You rolled a ${num}`);
//   }


//   return (
//     <div>
//       {/* <button onClick={rollAll}>Roll All</button> */}
//       <ReactDice
//         numDice={3}
//         rollDone={rollDoneCallback}
//         outline={true}
//         outlineColor='#000'
//         dotColor='#e51022'
//         faceColor='#efefef'
//         // ref={dice => reactDice = dice}
//       />
//     </div>
//   )
// }


export default RollDice;
