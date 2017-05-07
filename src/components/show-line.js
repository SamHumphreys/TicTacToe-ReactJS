import React from 'react';
import ShowSquare from './show-square';

const ShowLine = (props) => {

  return (
      <div className='line'>
        {props.line.map((square,index) => {
          return (
            <ShowSquare
              onSquareClick={props.onSquareClick}
              data={square}
              key={props.lineNum + '' + index}
              lineNum={props.lineNum}
              squareNum={index}
            />
          )
        })}
      </div>
  )
};

export default ShowLine;
