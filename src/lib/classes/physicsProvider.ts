import { PhysicsProviderConfig } from "../types/physicsProviderConfig";
import { Item } from "./item";
import { Vec2 } from "./vec2";
import { World } from "./world";


export abstract class PhysicsProvider {
  constructor(
     readonly _: PhysicsProviderConfig,
  ) {}

  public abstract providePos( _item: Item, _world: World ): Vec2;
}