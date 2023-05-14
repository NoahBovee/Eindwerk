import Phaser from "phaser";

class Play extends Phaser.Scene {
  constructor() {
    super("PlayScene");
  }

  create() {
    const map = this.make.tilemap({ key: "map" });
    const tileset = map.addTilesetImage("tilesetPlains", "tileset");

    map.createStaticLayer("environment", tileset);
    map.createStaticLayer("land", tileset);
  }

  update() {}
}

export default Play;
