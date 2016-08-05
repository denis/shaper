export type ShapeType = "circle" | "square" | "triangle";

export abstract class Shape {
  constructor(private _x: number, private _y: number, private _size: number, private _fillColor: string = "#aaa") { }

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
    return this._fillColor;
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

  set fillColor(newFillColor: string) {
    this._fillColor = newFillColor;
  }
}
