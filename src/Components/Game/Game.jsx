import { useEffect } from "react";
import GameBoard from "./GameBoard";
import GameLo



const Controls = () => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.code) {
        case "ArrowLeft":
          break;
        case "ArrowRight":
          break;
        case "ArrowUp":
          break;
        case "ArrowDown":
          break;
        case "Space":
          break;
        case "KeyP":
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
   
    <div>
      <GameBoard />
    </div>
  );
};

export default Controls;
