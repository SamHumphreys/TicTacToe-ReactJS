import React from 'react';

const ShowSquares = (props) => {
  const position = [props.lineNum, props.squareNum];

  return (
        <div className='square'
          onClick={() => props.onSquareClick(position)}>
            {props.data}
        </div>
        );
};

export default ShowSquares;
