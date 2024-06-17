/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Leaf extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Leaf/costumes/costume1.svg", {
        x: -12.735340756937603,
        y: -54.09938561808161,
      }),
    ];

    this.sounds = [new Sound("pop", "./Leaf/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(this.random(-240, 240), this.random(-180, 180));
    this.y = 180;
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.count = 0;
    while (true) {
      if (this.touching(this.sprites["Caterpillar"].andClones())) {
        this.stage.vars.count++;
        yield* this.playSoundUntilDone("pop");
        this.goto(this.random(-240, 240), this.random(-180, 180));
        this.y = 180;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      this.y -= 10;
      if (this.compare(this.y, -170) < 0) {
        this.goto(this.random(-240, 240), this.random(-180, 180));
        this.y = 180;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.compare(this.stage.vars.count, 20) > 0) {
        /* TODO: Implement stop other scripts in sprite */ null;
        this.effects.ghost = 100;
      }
      yield;
    }
  }
}
