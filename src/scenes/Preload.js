import Phaser from "phaser";

class Preload extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }
  preload() {
    this.load.tilemapTiledJSON("map", "/assets/endwork_world.json");
    this.load.image("tileset", "/assets/tilesetPlains.png");
  }
  create() {
    this.scene.start("PlayScene");
  }
}

export default Preload;
