import { PhysicsProvider } from "../classes/physicsProvider";
import { ShapeProvider } from "../classes/shapeProvider";


export type PhysicsProviderAcceptable = {
  new: () => PhysicsProvider;
}

export type ShapeProviderAcceptable = {
  new: () => ShapeProvider;
}