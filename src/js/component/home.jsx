import React, { Component } from 'react';
import Tile from './Tile'; 
import Announcement from './Announcement';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gameBoard: ['', '', '', '', '', '', '', '', ''],
      currentPlayer: 'X',
      winner: null,
    };
  }

  handleClick(i) {
    const { gameBoard, currentPlayer, winner } = this.state;
    if (gameBoard[i] === '' && !winner) {
      const newGameBoard = gameBoard.slice();
      newGameBoard[i] = currentPlayer;
      this.setState({
        gameBoard: newGameBoard,
        currentPlayer: currentPlayer === 'X' ? 'O' : 'X',
        winner: this.calculateWinner(newGameBoard),
      });
    }
  }

  

  calculateWinner(gameBoard) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
        return gameBoard[a];
      }
    }
    return null;
  }

  resetGame() {
    this.setState({
      gameBoard: ['', '', '', '', '', '', '', '', ''],
      currentPlayer: 'X',
      winner: null,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="menu">
          <h1>Tic Tac Toe in React</h1>
          <Announcement winner={this.state.winner} currentPlayer={this.state.currentPlayer} />
          <button onClick={() => this.resetGame()}>Resetear</button>
        </div>
        <div className="board">
          {this.state.gameBoard.map((value, i) => (
            <Tile
              key={i}
              value={value}
              onClick={() => this.handleClick(i)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
