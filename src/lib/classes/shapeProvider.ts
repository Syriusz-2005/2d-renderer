import { Item } from "./item";


export abstract class ShapeProvider {
  constructor() {}

  public abstract draw( _: CanvasRenderingContext2D, _item: Item ): void
}