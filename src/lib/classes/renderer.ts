import { Renderable } from "../types/renderable";


export class Renderer {
  private readonly canvas: HTMLCanvasElement;
  private readonly context: CanvasRenderingContext2D;
  
  constructor(
    canvas: HTMLCanvasElement,
  ) {
    this.canvas = canvas;
    const ctx = this.canvas.getContext('2d');
    if (ctx === null) throw new Error('Cannot initialize 2D context');
    this.context = ctx;
  }

  public renderTargets( targets: readonly Renderable[] ): void {
    this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    for (const target of targets) {
      target.render(this.context);
    }
  }
}

