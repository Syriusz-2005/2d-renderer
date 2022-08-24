import { World } from "../classes/world";


export type Steppable = {
  step: ( world: World ) => void;
}