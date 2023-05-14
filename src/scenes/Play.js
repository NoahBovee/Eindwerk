import Phaser from "phaser";
import Player from "../entities/Player";

class Play extends Phaser.Scene {
  constructor() {
    super("PlayScene");
  }

  create() {
    const map = this.createMap();
    const layers = this.createLayer(map);

    const player = this.createPlayer();
    this.playerSpeed = 100;
  }

  createMap() {
    const map = this.make.tilemap({ key: "map" });
    map.addTilesetImage("tilesetPlains", "tileset");
    return map;
  }

  createLayer(map) {
    const tileset = map.getTileset("tilesetPlains");
    const land = map.createStaticLayer("land", tileset);
    // const environment map.createStaticLayer("environment", tileset);
    return { land };
  }

  createPlayer() {
    return new Player(this, 800, 800);
  }
  update() {}
}

export default Play;
