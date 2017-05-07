import React from 'react';

const ShowStatus = (props) => {
  return (
    <div>
      <p>Player {props.turn} to go next.</p>
      <p>There have been {props.turnCount} goes so far...</p>
    </div>
  )
};

export default ShowStatus;
