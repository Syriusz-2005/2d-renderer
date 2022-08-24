import { PhysicsProviderAcceptable, ShapeProviderAcceptable } from '../types/providerAcceptable';
import { Renderable } from "../types/renderable";
import { Steppable } from "../types/steppable";
import { PhysicsProvider } from "./physicsProvider";
import { ShapeProvider } from './shapeProvider';
import { Vec2 } from "./vec2";
import { World } from "./world";


export class Item implements Renderable, Steppable {
  private readonly physicsProvider: PhysicsProvider;
  private readonly shapeProvider: ShapeProvider;
  

  constructor(
    private pos: Vec2,
    private boundingBoxSize: Vec2,
    physicsProvider: PhysicsProviderAcceptable & PhysicsProvider,
    shapeProvider: ShapeProviderAcceptable & ShapeProvider,
  ) {
    this.physicsProvider = physicsProvider.new();
    this.shapeProvider = shapeProvider.new();
  }

  public get PhysicsProvider() {
    return this.physicsProvider;
  }

  public get position(): Vec2 {
    return Vec2.fromVec2(this.pos);
  }

  public get BoundingBox(): Vec2 {
    return this.boundingBoxSize;
  }

  public set position(value: Vec2) {
    this.pos = Vec2.fromVec2(value);
  }

  public step( world: World ) {
    const newPos = this.physicsProvider.providePos(this, world);
    this.position = newPos;
  }

  public render(ctx: CanvasRenderingContext2D) {
    this.shapeProvider.draw(ctx, this);
  }
}