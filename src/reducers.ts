import {Action} from "redux";

import * as models from "./models.ts";
import {State} from "./state.ts";
import {ADD_SHAPE, MOVE_SHAPE, AddShapeAction, MoveShapeAction} from "./actions.ts";

const initialState: State = {
  shapes: []
}

export function shaperApp(state: State = initialState, action: Action): State {
  switch (action.type) {
    case ADD_SHAPE:
      return addShape(state, action as AddShapeAction);
    case MOVE_SHAPE:
      return moveShape(state, action as MoveShapeAction);
    default:
      return state;
  }
}

function addShape(state: State, action: AddShapeAction) {
  let shape: models.Shape;
  const {shapeType, x, y} = action;
  const size = 80;

  if (shapeType == "circle") {
    shape = new models.Circle(x, y, size);
  } else if (shapeType == "square") {
    shape = new models.Square(x, y, size);
  } else if (shapeType == "triangle") {
    shape = new models.Triangle(x, y, size);
  }

  return Object.assign({}, state, {
    shapes: [...state.shapes, shape]
  });
}

function moveShape(state: State, action: MoveShapeAction) {
  return Object.assign({}, state, {
    shapes: state.shapes.map((shape, index) => {
      if (index == action.shapeIndex) {
        shape.x = action.x;
        shape.y = action.y;

        return shape;
      } else {
        return shape;
      }
    })
  });
}
