import { Item } from "../classes/item";
import { ShapeProvider } from "../classes/shapeProvider";
import { Vec2 } from "../classes/vec2";
import { ShapeProviderAcceptable } from "../types/providerAcceptable";


export class BasicBoxShapeProvider extends ShapeProvider implements ShapeProviderAcceptable {
  constructor(
    private readonly boxSize: Vec2,
    private readonly color: string,
    private inheritBoxSizeFromBoundingBox: boolean,
  ) {
    super();
  }

  public override draw( ctx: CanvasRenderingContext2D, item: Item) {
    ctx.fillStyle = this.color;
    const boxSize = this.inheritBoxSizeFromBoundingBox ? item.BoundingBox : this.boxSize;
    ctx.fillRect(...item.position.asArray(), ...boxSize.asArray());
  }

  public new(): BasicBoxShapeProvider {
    return new BasicBoxShapeProvider( this.boxSize, this.color, this.inheritBoxSizeFromBoundingBox );
  }
}