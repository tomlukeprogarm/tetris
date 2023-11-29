

import React from 'react';
import TetrisPiece from './GamePiecesData';
class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: this.createEmptyGrid(), 
      currentPiece: null,  
    };
  }

  createEmptyGrid() {

    const grid = [];
    for (let row = 0; row < 20; row++) {
      grid.push(Array(10).fill(null)); 
    }
    return grid;
  }

  renderBoard() {
   
    return this.state.grid.map((row, rowIndex) => (
      <div className="board-row" key={rowIndex}>
        {row.map((cell, colIndex) => (
          <div key={colIndex}>
            <TetrisPiece type={cell} />
          </div>
        ))}
      </div>
    ));
  }

  render() {
    return (
      <div>
        <div className="game-board">{this.renderBoard()}</div>
      </div>
    );
  }
}

export default GameBoard;
