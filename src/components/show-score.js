import React from 'react';

const Score = (props) => {
  return (
    <div>
      Player 1 - {props.score[0]} : {props.score[1]} - Player 2
    </div>
  )
};

export default Score;
