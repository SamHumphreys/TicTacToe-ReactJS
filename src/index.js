import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import ShowBoard from './components/show-board';
import ShowStatus from './components/show-status';
import ShowScore from './components/show-score';

class App extends React.Component {
  constructor(props) {
    super (props)

    this.state = {
      turnCount: 0,
      whoseTurn: 'X',
      score: [0,0],
      winner: null,
      board: [
        [null,null,null],
        [null,null,null],
        [null,null,null]
      ]
    };
  };

  onSquareClick (sq) {
    let whoseTurn = this.state.whoseTurn;
    let board = this.state.board.slice();
    let turnCount = this.state.turnCount;
    if (board[sq[0]][sq[1]] === null) {
      turnCount ++;

      board[sq[0]][sq[1]] = whoseTurn;

      whoseTurn = (whoseTurn === 'X' ? 'O' : 'X')

      this.setState({board, whoseTurn, turnCount});
    };
  };

  render () {
    return (
      <div className='app'>
        <ShowStatus
          turn={this.state.whoseTurn}
          turnCount={this.state.turnCount}
          winner={this.state.winner} />
        <ShowBoard
          board={this.state.board}
          onSquareClick={deets => this.onSquareClick(deets)} />
        <ShowScore score={this.state.score} />
      </div>
    )
  };
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
