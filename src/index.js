import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  height: 800,
  width: 800,
  backgroundColor: "#2d6b2d",
  scene: {
    preload,
    create,
  },
};

new Phaser.Game(config);

function preload() {
  this.load.image("player", "../assets/bird.png");
}

function create() {
  this.add
    .sprite(config.height / 2, config.height / 2, "player")
    .setOrigin(0, 0);
}
