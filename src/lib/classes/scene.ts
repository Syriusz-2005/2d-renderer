import { Item } from "./item";
import { Renderer } from "./renderer";
import { World } from "./world";
import { WorldItemsControler } from "./worldItemsControler";


export class Scene {

  private worldItemsControler = new WorldItemsControler();

  private readonly renderer: Renderer;
  private readonly world = new World();

  constructor(
    canvas: HTMLCanvasElement,
  ) {
    this.renderer = new Renderer(canvas);
  }

  public renderTargets(): void {
    const items = this.worldItemsControler.worldItems;
    this.renderer.renderTargets(items);
  }

  public makeStep(): void {
    const items = [...this.worldItemsControler.worldItems, ...this.worldItemsControler.worldSteppableItems];
    this.world.stepTargets(items);
  }
  
  public assignItem( item: Item ) { this.worldItemsControler.assignItem(item) }
}