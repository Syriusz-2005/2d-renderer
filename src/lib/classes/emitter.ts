import { Steppable } from "../types/steppable";


export class Emitter implements Steppable {
  
  constructor( private onStep: () => void ) {}

  public step() {
    this.onStep();
  }
}