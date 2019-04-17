import React from 'react';
import index from '../index';

export default class Gun extends React.Component {
  state = { 
    chamber: null, 
    spinningTheChamber: false };

    handleClick = () => {
      this.setState({
        spinningTheChamber: true,
        chamber: null
      });
      setTimeout(() => {
        const randomChamber = Math.ceil(Math.random() * 8)
        this.setState({
         spinningTheChamber: false,
         chamber: randomChamber
        });
      }, 2000)
}

  render() {
    return (
      <div>
        <p>
          {this.state.spinningTheChamber && 'spinning the chamber and pulling the trigger!'}
          {this.state.chamber === null ? '' : this.state.chamber === this.props.bulletInChamber ? 'BANG!!!!!' : "you're safe!"}
        </p>
        <button onClick={this.handleClick}>
        Pull the trigger, coward.
        </button>
      </div>
    )
  }
}
