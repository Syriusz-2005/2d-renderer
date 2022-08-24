import { Item } from "../classes/item";
import { PhysicsProvider } from "../classes/physicsProvider";
import { Vec2 } from "../classes/vec2";
import { World } from "../classes/world";
import { PhysicsProviderAcceptable } from "../types/providerAcceptable";



export class BasicGravityPhysicsProvider extends PhysicsProvider implements PhysicsProviderAcceptable {
  private velocity: Vec2 = new Vec2(0, 0);

  constructor(
    private readonly gravity: Vec2,
  ) {
    super({});
  }

  public override providePos(item: Item, _: World): Vec2 {
    this.velocity = this.velocity.add(this.gravity);
    return item.position.add( this.velocity );
  }

  public new(): PhysicsProvider {
    return new BasicGravityPhysicsProvider(this.gravity);
  }
}