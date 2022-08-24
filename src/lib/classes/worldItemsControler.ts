import { Steppable } from './../types/steppable';
import { Renderable } from "../types/renderable";
import { Item } from './item';


export class WorldItemsControler {
  private readonly items: (Renderable & Steppable)[] = [];
  private readonly steppableItems: (Steppable)[] = [];

  public get worldItems() {
    return this.items;
  }

  public get worldSteppableItems() {
    return this.steppableItems;
  }

  public assignItem( item: Item ) {
    this.items.push( item );
  }
}