import {Action} from "redux";

import {ShapeType} from "./models/shape.ts";

export const ADD_SHAPE = "ADD_SHAPE";
export const MOVE_SHAPE = "MOVE_SHAPE";

export interface AddShapeAction extends Action {
  shapeType: ShapeType;
  x: number;
  y: number;
}

export interface MoveShapeAction extends Action {
  shapeIndex: number;
  x: number;
  y: number;
}

export function addShape(shapeType: ShapeType, x: number, y: number): AddShapeAction {
  return {
    type: ADD_SHAPE,
    shapeType: shapeType,
    x: x,
    y: y
  }
}

export function moveShape(shapeIndex: number, x: number, y: number): MoveShapeAction {
  return {
    type: MOVE_SHAPE,
    shapeIndex,
    x: x,
    y: y
  }
}
