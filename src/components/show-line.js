import React from 'react';
import ShowSquare from './show-square';

const ShowLine = (props) => {

  const squares = props.line.map((square,index) => {
    return (
      <ShowSquare
        onSquareClick={props.onSquareClick}
        data={square}
        key={props.lineNum + '' + index}
        lineNum={props.lineNum}
        squareNum={index}
      />
    )
  });

  return (
      <div className='line'>
        {squares}
      </div>
          )
};

export default ShowLine;
