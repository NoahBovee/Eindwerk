import Phaser from "phaser";
import Player from "../entities/Player";

class Play extends Phaser.Scene {
  constructor(config) {
    super("PlayScene");

    this.config = config;
  }

  create() {
    const map = this.createMap();
    const layers = this.createLayer(map);

    const player = this.createPlayer();
    this.playerSpeed = 100;

    this.setupFollowupCameraOn(player);
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
    const randomX = Phaser.Math.Between(0, 1600);
    const randomY = Phaser.Math.Between(0, 1600);
    return new Player(this, randomX, randomY);
  }
  setupFollowupCameraOn(player) {
    const { height, width, mapOffset } = this.config;

    this.physics.world.setBounds(0, 0, width + mapOffset, height);
    this.cameras.main.setBounds(0, 0, width + mapOffset, height).setZoom(1.5);
    this.cameras.main.startFollow(player);
  }
}

export default Play;
