import React from 'react';
import ShowLine from './show-line';

const ShowBoard = (props) => {
  const renderLines = props.board.map((line, index) => {
    return <ShowLine
      onSquareClick={props.onSquareClick}
      key={'line'+index}
      line={line}
      lineNum={index}/>;
  });

  return (
    <div className='board'>
      {renderLines}
    </div>
  )
};

export default ShowBoard;
