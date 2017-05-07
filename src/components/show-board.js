import React from 'react';
import ShowLine from './show-line';

const ShowBoard = (props) => {

  return (
    <div className='board'>
      {props.board.map((line, index) => {
        return (
          <ShowLine
            onSquareClick={props.onSquareClick}
            key={'line'+index}
            line={line}
            lineNum={index}/>
        )
      })}
    </div>
  )
};

export default ShowBoard;
