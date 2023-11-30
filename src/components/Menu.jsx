import { useGameStore } from "../store";

export default function Menu() {
  const { startGame, gameState } = useGameStore((state) => ({
    startGame: state.startGame,
    gameState: state.gameState,
  }));
  return (
    <>
      {gameState === "MENU" && (
        <div className="menu">
          <h1>Geometry game</h1>
          <button className="" onClick={startGame}>
            Start Game
          </button>
          <button className="">End Game</button>
        </div>
      )}
    </>
  );
}
