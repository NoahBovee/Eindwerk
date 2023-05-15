import Phaser from "phaser";

class EnemyChars extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.init();
    this.initEvents();
  }

  init() {
    this.speed = 100;
  }

  initEvents() {
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
  }

  update(time, delta) {}
}

export default EnemyChars;
