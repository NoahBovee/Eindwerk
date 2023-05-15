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
      "player-down",
      "/assets/Character with sword and shield/spritesheet_Down.png",
      {
        frameWidth: 64,
        frameHeight: 64,
      }
    );
    this.load.spritesheet(
      "player-up",
      "/assets/Character with sword and shield/spritesheet_UP.png",
      {
        frameWidth: 64,
        frameHeight: 64,
      }
    );
    this.load.spritesheet(
      "player-left",
      "/assets/Character with sword and shield/spritesheet_Left.png",
      {
        frameWidth: 64,
        frameHeight: 64,
      }
    );
    this.load.spritesheet(
      "player-right",
      "/assets/Character with sword and shield/spritesheet_Right.png",
      {
        frameWidth: 64,
        frameHeight: 64,
      }
    );

    this.load.spritesheet(
      "enemy",
      "/assets/Goblin Encounter Core v1.0/Goblin Sword Sprite Sheet 64x64.png",
      {
        frameWidth: 64,
        frameHeight: 64,
      }
    );
  }
  create() {
    this.scene.start("PlayScene");
  }
}

export default Preload;
