import React from 'react';

const ShowStatus = (props) => {

  if (!props.winner) {
    return <p>Player {props.turn} to go next.</p>
  };
  if (props.winner === 'draw') {
    return (
      <div>
        <p>The game is a draw!</p>
        <button onClick={props.resetBoard}>Play again</button>
      </div>
    )
  } else {
    return (
      <div>
        <p>Player {props.winner} is the winner!</p>
        <button onClick={props.resetBoard}>Play again</button>
      </div>
    )
  }
};

export default ShowStatus;
