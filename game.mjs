class Game {
  #canvasSizeX
  #canvasSizeY
  #canvasElement
  #canvas

  constructor(gameConfig) {
    this.#canvasSizeX = gameConfig.canvasSizeX
    this.#canvasSizeY = gameConfig.canvasSizeY
    this.#canvasElement = document.getElementById(gameConfig.canvasId)
    this.#canvasElement.height = this.#canvasSizeY
    this.#canvasElement.width = this.#canvasSizeX
    this.#canvas = this.#canvasElement.getContext("2d")
  }
  run() {
    console.log(this.#canvasSizeX, this.#canvasSizeY)
  }
}

export default Game