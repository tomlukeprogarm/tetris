import React, { useEffect } from 'react';
import useGameLogic from './GameLogic';

const Controls = () => {
  const { grid, currentPiece, nextPiece , movePiece, rotatePiece, hardDropPiece, clearLines, updateGameState } = useGameLogic();

  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          movePiece('left');
          break;

        case 'ArrowRight':
          movePiece('right');
          break;

        case 'ArrowUp':
          rotatePiece();
          break;

        case 'ArrowDown':
          hardDropPiece();
          break;

        case 'Space':
          hardDropPiece();
          break;

        case 'KeyP':
          pauseGame();
          break;
          
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <>
      {/* <GameBoard grid={grid} /> */}
      {/* Other game components */}
    </>
  );
};

export default Controls;
