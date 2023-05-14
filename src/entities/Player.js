import Phaser from "phaser";
import initAnimations from "./PlayerAnims";

class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "player");
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.init();
    this.initEvents();
  }

  init() {
    this.playerSpeed = 100;

    this.keys = this.scene.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.Z,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.Q,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    });

    initAnimations(this.scene.anims);
  }

  initEvents() {
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
  }

  update() {
    if (this.keys.up.isDown) {
      this.setVelocityY(-this.playerSpeed);
      this.play("up", true);
    } else if (this.keys.down.isDown) {
      this.setVelocityY(this.playerSpeed);
      this.play("down", true);
    } else {
      this.setVelocityY(0);
    }

    if (this.keys.left.isDown) {
      this.setVelocityX(-this.playerSpeed);
      this.play("left", true);
    } else if (this.keys.right.isDown) {
      this.setVelocityX(this.playerSpeed);
      this.play("right", true);
    } else {
      this.setVelocityX(0);
    }
  }
}

export default Player;
