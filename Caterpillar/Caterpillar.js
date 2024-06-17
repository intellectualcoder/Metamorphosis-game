/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Caterpillar extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Caterpillar/costumes/costume1.svg", {
        x: 201.836445,
        y: -68.59184000000002,
      }),
      new Costume("costume2", "./Caterpillar/costumes/costume2.svg", {
        x: 212.01668519374388,
        y: -53.938845000000015,
      }),
      new Costume("costume3", "./Caterpillar/costumes/costume3.svg", {
        x: 225.55695521906884,
        y: -42.50074219788118,
      }),
      new Costume("costume4", "./Caterpillar/costumes/costume4.svg", {
        x: 231.51595170979925,
        y: -28.50073000000009,
      }),
      new Costume("costume5", "./Caterpillar/costumes/costume5.svg", {
        x: 140.97333173793652,
        y: -7.876078809365765,
      }),
      new Costume("costume6", "./Caterpillar/costumes/costume6.svg", {
        x: 140.69786127448307,
        y: -7.874320870245896,
      }),
      new Costume("costume7", "./Caterpillar/costumes/costume7.svg", {
        x: 145.50123053541301,
        y: -7.874320435122939,
      }),
      new Costume("costume8", "./Caterpillar/costumes/costume8.svg", {
        x: 149.13362820449908,
        y: -7.874325435122955,
      }),
      new Costume("costume9", "./Caterpillar/costumes/costume9.svg", {
        x: 149.13362600856368,
        y: -7.874320435122939,
      }),
    ];

    this.sounds = [new Sound("pop", "./Caterpillar/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
    ];
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    this.costume = "costume1";
    this.size = 100;
    this.goto(-14, -80);
    yield* this.thinkAndWait("Yummy...  🍃 🍽️", 2);
    while (true) {
      if (this.keyPressed("right arrow")) {
        this.x += 10;
      }
      if (this.keyPressed("left arrow")) {
        this.x -= 10;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    yield* this.grow1();
  }

  *grow1() {
    while (true) {
      if (this.toNumber(this.stage.vars.count) === 5) {
        this.costume = "costume2";
      }
      yield;
    }
  }

  *grow2() {
    while (true) {
      if (this.toNumber(this.stage.vars.count) === 10) {
        this.costume = "costume3";
      }
      yield;
    }
  }

  *grow3() {
    while (true) {
      if (this.toNumber(this.stage.vars.count) === 15) {
        this.costume = "costume4";
        yield* this.thinkAndWait("Hmm...", 2);
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    yield* this.grow2();
  }

  *whenGreenFlagClicked4() {
    yield* this.grow3();
  }

  *whenGreenFlagClicked5() {
    while (true) {
      if (this.toNumber(this.stage.vars.count) === 20) {
        this.costume = "costume5";
        yield* this.glide(2, 208, -1);
        this.size -= 10;
        this.costume = "costume6";
        yield* this.thinkAndWait("🐛  --> 🦋", 2);
        this.costume = "costume7";
        yield* this.thinkAndWait("🦋!!!", 2);
        this.costume = "costume8";
        this.think("Hmm...");
        this.costume = "costume9";
        yield* this.thinkAndWait("🦋 🛌🌜", 2);
        this.moveBehind();
        this.effects.ghost = 100;
      }
      yield;
    }
  }
}
