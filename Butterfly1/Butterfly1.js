/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Butterfly1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ButterflyA", "./Butterfly1/costumes/ButterflyA.svg", {
        x: 21.860516776859413,
        y: 26.47466908206593,
      }),
      new Costume("ButterflyB", "./Butterfly1/costumes/ButterflyB.svg", {
        x: 32.83936702479335,
        y: 18.08956892561983,
      }),
      new Costume("ButterflyC", "./Butterfly1/costumes/ButterflyC.svg", {
        x: 27.83591812313631,
        y: 15.328267250899728,
      }),
    ];

    this.sounds = [new Sound("pop", "./Butterfly1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];
  }

  *whenGreenFlagClicked() {
    if (this.compare(this.stage.vars.count, 19) < 0) {
      this.moveAhead();
      this.goto(93, -40);
      this.effects.ghost = 100;
      this.effects.color = 10;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.compare(this.stage.vars.count, 19) > 0) {
        yield* this.wait(9);
        this.effects.ghost = 0;
        this.costume = "ButterflyA";
        yield* this.wait(1);
        this.costume = "ButterflyB";
        while (true) {
          for (let i = 0; i < 10; i++) {
            this.effects.color += 10;
            yield;
          }
          this.costume = "ButterflyC";
          yield* this.glide(1, this.random(-240, 240), this.random(-180, 180));
          this.costume = "ButterflyA";
          yield* this.wait(0.5);
          this.costume = "ButterflyC";
          yield* this.wait(0.5);
          yield;
        }
      }
      yield;
    }
  }
}
