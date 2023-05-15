import Phaser from "phaser";
import EnemyChars from "./EnemyChars";
import initAnims from "./EnemyAnims";

class Enemy extends EnemyChars {
  constructor(scene, x, y) {
    super(scene, x, y, "enemy");
    initAnims(scene.anims);
  }

  update(time, delta) {
    super.update(time, delta);
    this.play("enemy-idle", true);
  }
}

export default Enemy;
