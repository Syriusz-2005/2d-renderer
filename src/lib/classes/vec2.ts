import { MathUtils } from "./math";


export class Vec2 {

  public static fromVec2( vector: Vec2 ) {
    return new Vec2( vector.x, vector.y );
  }

  public static fromArray( array: [number, number] ) {
    return new Vec2( array[0], array[1] );
  }

  public static fromRandomRange( x: Vec2, y: Vec2 ) {
    return new Vec2( MathUtils.randomInt(x.x, x.y), MathUtils.randomInt(y.x, y.y));
  }

  constructor(
    public readonly x: number,
    public readonly y: number,
  ) {}

  public add( vector: Vec2 ): Vec2 {
    return new Vec2( vector.x + this.x, vector.y + this.y );
  }

  public subtract( vector: Vec2 ): Vec2 {
    return new Vec2( vector.x - this.x, vector.y - this.y );
  }

  public getScalarDistance(): number {
    return this.x + this.y;
  }

  public asArray(): [number, number] {
    return [this.x, this.y];
  }
}