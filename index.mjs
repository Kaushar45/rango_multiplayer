import Game from "./game.mjs";

const config = {
  canvasSizeX: 500,
  canvasSizeY: 500,
  canvasId: "canvas",
};

const gameObject = new Game(config);
gameObject.run();
