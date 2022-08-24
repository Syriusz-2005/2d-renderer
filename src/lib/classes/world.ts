import { Steppable } from "../types/steppable";


export class World {

  constructor() {}

  public stepTargets( targets: Steppable[] ): void {
    for (const target of targets) {
      target.step(this);
    }
  }
}