

export class MathUtils {
  public static randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}