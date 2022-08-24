import { Item } from "./lib/classes/item";
import { Scene } from "./lib/classes/scene";
import { Vec2 } from "./lib/classes/vec2";
import { BasicGravityPhysicsProvider } from "./lib/physicsProviders/basicGravityPhysicsProvider";
import { BasicBoxShapeProvider } from "./lib/shapeProviders/basicBoxShapeProvider";
import "./style.css";

const canvas = document.querySelector("canvas")!;

canvas.width = innerWidth;
canvas.height = innerHeight;

const scene = new Scene(canvas);


for (let i = 0; i < 4; i++) {
  const item = new Item(
    Vec2.fromRandomRange(new Vec2(0, 500), new Vec2(0, 500)),
    Vec2.fromRandomRange(new Vec2(80, 100), new Vec2(80, 100)),
    new BasicGravityPhysicsProvider(new Vec2(0, 0.01)),
    new BasicBoxShapeProvider( new Vec2( 50, 50 ), 'green', true )
  );
  console.log(item.position);
  scene.assignItem(item);
}
console.log(scene);

function render() {
  scene.makeStep();
  scene.renderTargets();

  requestAnimationFrame(render);
}

render();
