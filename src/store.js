import { create } from "zustand";
import models from "./components/solids";

export const playAudio = (path) => {
  const audio = new Audio("./hit.mp3");
  audio.Play();
};

export const gameState = {
  Menu: "MENU",
  Game: "GAME",
  GameOver: "GAMEOVER",
};
export const generateGameLevel = ({ nbStages }) => {
  const level = [];

  for (let i = 0; i < nbStages; i++) {
    const stage = [];
    const nbOptions = 3 + i;
    for (let j = 0; j < nbOptions; j++) {
      let model = null;
      while (!model || stage.includes(model)) {
        model = models[Math.floor(Math.random() * models.length)];
      }
      stage.push(model);
    }
    stage.push(stage[Math.floor(Math.random() * stage.length)]);
    level.push(stage);
  }
  return level;
};

export const useGameStore = create((set) => ({
  level: null,
  currentStage: 0,
  currentModel: null,
  gameState: gameState.Menu,
  // mode: "hiragana",
  startGame: () => {
    const level = generateGameLevel({ nbStages: 5 });
    // playAudio();
    // const currentModel = level[0].find((model) => model.correct);
    const currentModel = level[0][level[0]?.length - 1];
    set({ level, currentStage: 0, currentModel, gameState: gameState.Game });
  },
  nextStage: () => {
    set((state) => {
      const currentStage = state.currentStage + 1;
      // const currentModel = state.level[currentStage].find(
      //   (model) => model.correct,
      // );
      const currentModel =
        state.level[currentStage][state.level[currentStage].length - 1];
      return { currentStage, currentModel };
    });
  },
}));
