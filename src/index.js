import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import ShowBoard from './components/show-board';
import ShowStatus from './components/show-status';
import ShowScore from './components/show-score';
import CheckForWinner from './logic/check-for-winner';


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
      ],
      whoWentFirst: 'X'
    };
  };

  onSquareClick (sq) {
    if (this.state.winner) return;
    let whoseTurn = this.state.whoseTurn;
    let board = this.state.board.slice();
    let turnCount = this.state.turnCount;
    if (board[sq[0]][sq[1]] === null) {
      turnCount ++;

      board[sq[0]][sq[1]] = whoseTurn;

      whoseTurn = (whoseTurn === 'X' ? 'O' : 'X')

      this.setState({board, whoseTurn, turnCount}, () => {
        const winner = CheckForWinner(this.state.board, this.state.turnCount)
        if (winner) {
          let score = this.state.score;
          if (winner === 'X') {
            score[0] ++;
          } else if (winner === 'O') {
            score[1] ++;
          };
          this.setState({winner, score})
        };
      });
    };
  };

  resetBoard () {
    const board = [
      [null,null,null],
      [null,null,null],
      [null,null,null]
    ];
    const whoWentFirst = this.state.whoWentFirst;
    this.setState({
      board,
      winner: null,
      whoseTurn: whoWentFirst === 'X' ? 'O': 'X',
      whoWentFirst: whoWentFirst === 'X' ? 'O': 'X',
      turnCount: 0
    });
  };

  render () {
    return (
      <div className='app'>
        <ShowStatus
          turn={this.state.whoseTurn}
          turnCount={this.state.turnCount}
          winner={this.state.winner}
          resetBoard={() => this.resetBoard()} />
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
