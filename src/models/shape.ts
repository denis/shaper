export type ShapeType = "circle" | "square" | "triangle";

export abstract class Shape {
  constructor(private _x: number, private _y: number, private _size: number) { }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  get size(): number {
    return this._size;
  }

  get fillColor(): string {
    return "#aaa";
  }

  set x(newX: number) {
    this._x = newX;
  }

  set y(newY: number) {
    this._y = newY;
  }

  set size(newSize: number) {
    this._size = newSize;
  }
}
