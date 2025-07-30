class Game {
  #canvasSizeX;
  #canvasSizeY;
  #canvasElement;
  #canvas;

  constructor(gameConfig) {
    this.#canvasSizeX = gameConfig.canvasSizeX;
    this.#canvasSizeY = gameConfig.canvasSizeY;
    this.#canvasElement = document.getElementById(gameConfig.canvasId);
    this.#canvasElement.height = this.#canvasSizeY;
    this.#canvasElement.width = this.#canvasSizeX;
    this.#canvas = this.#canvasElement.getContext("2d");
    document.addEventListener("keypress", this.#keyInput);
  }
  run() {
    console.log(this.#canvasSizeX, this.#canvasSizeY);
  }

  #keyInput(event) {
    if (event.code === "KeyA") {
      console.log("left");
    } else if (event.code === "KeyS") {
      console.log("down");
    } else if (event.code === "KeyW") {
      console.log("up");
    } else if (event.code === "KeyD") {
      console.log("right");
    } else if (event.code === "Space") {
      console.log("fire");
    }
  }
}

export default Game;
