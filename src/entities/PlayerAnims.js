export default (anims) => {
  anims.create({
    key: "idle",
    frames: anims.generateFrameNumbers("player-down", {
      start: 0,
      end: 3,
    }),
    frameRate: 5,
    repeat: -1,
  });
  anims.create({
    key: "down",
    frames: anims.generateFrameNumbers("player-down", {
      start: 0,
      end: 3,
    }),
    frameRate: 5,
    repeat: -1,
  });
  anims.create({
    key: "up",
    frames: anims.generateFrameNumbers("player-up", {
      start: 0,
      end: 3,
    }),
    frameRate: 5,
    repeat: -1,
  });
  anims.create({
    key: "left",
    frames: anims.generateFrameNumbers("player-left", {
      start: 0,
      end: 3,
    }),
    frameRate: 5,
    repeat: -1,
  });
  anims.create({
    key: "right",
    frames: anims.generateFrameNumbers("player-right", {
      start: 0,
      end: 3,
    }),
    frameRate: 10,
    repeat: -1,
  });
};
