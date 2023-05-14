import Phaser from "phaser";

class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "player");
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.init();
  }

  init() {
    this.playerSpeed = 100;

    this.keys = this.scene.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.Z,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.Q,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    });
  }

  preUpdate() {
    if (this.keys.up.isDown) {
      this.setVelocityY(-this.playerSpeed);
    } else if (this.keys.down.isDown) {
      this.setVelocityY(this.playerSpeed);
    } else {
      this.setVelocityY(0);
    }

    if (this.keys.left.isDown) {
      this.setVelocityX(-this.playerSpeed);
    } else if (this.keys.right.isDown) {
      this.setVelocityX(this.playerSpeed);
    } else {
      this.setVelocityX(0);
    }
  }
}

export default Player;
