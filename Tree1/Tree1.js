/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Tree1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("tree1", "./Tree1/costumes/tree1.svg", {
        x: 146.78599536576183,
        y: 209.7588185433731,
      }),
    ];

    this.sounds = [new Sound("pop", "./Tree1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.size = 100;
  }
}
