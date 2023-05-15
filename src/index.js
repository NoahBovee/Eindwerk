import Phaser from "phaser";
import PreloadScene from "./scenes/Preload";
import PlayScene from "./scenes/Play";

const MAP_WIDTH = 1600;

const WIDTH = document.body.offsetWidth;
const HEIGHT = 1600;

const SHARED_CONFIG = {
  mapOffset: MAP_WIDTH > WIDTH ? MAP_WIDTH - WIDTH : 0,
  width: WIDTH,
  height: HEIGHT,
};

const Scenes = [PreloadScene, PlayScene];
const createScene = (Scene) => new Scene(SHARED_CONFIG);
const initScenes = () => Scenes.map(createScene);

const config = {
  type: Phaser.AUTO,
  ...SHARED_CONFIG,
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  scene: initScenes(),
};

new Phaser.Game(config);
