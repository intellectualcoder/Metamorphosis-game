import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Butterfly1 from "./Butterfly1/Butterfly1.js";
import Caterpillar from "./Caterpillar/Caterpillar.js";
import Tree1 from "./Tree1/Tree1.js";
import Leaf from "./Leaf/Leaf.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Butterfly1: new Butterfly1({
    x: 233,
    y: -62,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 110.00000000000001,
    visible: true,
    layerOrder: 4,
  }),
  Caterpillar: new Caterpillar({
    x: 208,
    y: -1,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 9,
    size: 90,
    visible: true,
    layerOrder: 1,
  }),
  Tree1: new Tree1({
    x: -22,
    y: -4,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3,
  }),
  Leaf: new Leaf({
    x: 152,
    y: -24,
    direction: -149,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
