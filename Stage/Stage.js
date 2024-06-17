/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Forest", "./Stage/costumes/Forest.png", { x: 480, y: 360 }),
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.count = 22;

    this.watchers.count = new Watcher({
      label: "count",
      style: "normal",
      visible: true,
      value: () => this.vars.count,
      x: 245,
      y: 175,
    });
  }
}
