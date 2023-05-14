import Phaser from "phaser";

class Preload extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }
  preload() {
    this.load.tilemapTiledJSON("map", "/assets/endwork_world.json");
    this.load.image("tileset", "/assets/tilesetPlains.png");

    this.load.image(
      "player",
      "/assets/Character with sword and shield/idle/idle down1.png"
    );

    this.load.spritesheet(
      "player",
      "/assets/Character with sword and shield/spritesheet.png",
      {
        frameWidth: 32,
        frameHeight: 38,
        spacing: 32,
      }
    );
  }
  create() {
    this.scene.start("PlayScene");
  }
}

export default Preload;
