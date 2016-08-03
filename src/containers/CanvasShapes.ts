import {connect} from "react-redux";
import {Dispatch} from "redux";

import {State} from "../state.ts";
import {addShape, moveShape, bringShapeForward} from "../actions.ts";
import {ShapeType} from "../models/shape.ts";
import {Canvas} from "../components/canvas.tsx";

function mapStateToProps(state: State) {
  return {
    shapes: state.shapes
  }
}

function mapDispatchToProps(dispatch: Dispatch<State>) {
  return {
    onDrop: (shapeType: ShapeType, x: number, y: number) => {
      dispatch(addShape(shapeType, x, y));
    },
    onMouseMove: (shapeId: number, x: number, y: number) => {
      dispatch(moveShape(shapeId, x, y));
    },
    onDoubleClick: (shapeId: number, x: number, y: number) => {
      dispatch(bringShapeForward(shapeId, x, y));
    }
  }
}

export const CanvasShapes = connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas);
