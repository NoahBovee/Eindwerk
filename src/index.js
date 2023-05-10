import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  height: 800,
  width: 800,
  backgroundColor: "#2d6b2d",
  physics: {
    default: "arcade",
  },
  scene: {
    preload,
    create,
    update,
  },
};

let player = null;
let cursors = null;

const playerSpeed = 1;

function preload() {
  this.load.image("player", "../assets/bird.png");
}

function create() {
  player = this.physics.add
    .sprite(config.height / 2, config.height / 2, "player")
    .setOrigin(0.5);

  cursors = this.input.keyboard.addKeys("Z,Q,S,D");
}

function update() {
  if (cursors.Z.isDown) {
    player.y -= playerSpeed;
  } else if (cursors.S.isDown) {
    player.y += playerSpeed;
  }

  if (cursors.Q.isDown) {
    player.x -= playerSpeed;
  } else if (cursors.D.isDown) {
    player.x += playerSpeed;
  }
}

new Phaser.Game(config);
