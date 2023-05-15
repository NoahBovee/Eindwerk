export default (anims) => {
  anims.create({
    key: "enemy-idle",
    frames: anims.generateFrameNumbers("enemy", {
      start: 0,
      end: 2,
    }),
    frameRate: 5,
    repeat: -1,
  });
};
