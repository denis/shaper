import * as React from "react";

import {CanvasItem} from "./CanvasItem.tsx";

import * as models from "../models.ts";

export interface CanvasProps {
}

export interface CanvasState {
  shapes?: models.Shape[];
  draggingShape?: models.Shape;
  draggingShapeOffsetX?: number;
  draggingShapeOffsetY?: number;
}

export class Canvas extends React.Component<CanvasProps, CanvasState> {
  constructor(props: CanvasProps) {
    super(props);
    this.state = {
      shapes: [],
      draggingShapeOffsetX: 0,
      draggingShapeOffsetY: 0
    };
  }

  render() {
    return <div className="canvas"
      onDragOver={(e) => {this.dragOver(e)}}
      onDrop={(e) => {this.drop(e)}}
      onMouseMove={(e) => {this.mouseMove(e)}}
    >
      <svg ref="svg">
        {
          this.state.shapes.map((shape, i) => {
            return <CanvasItem
              shape={shape}
              key={i}
              onMouseDown={(shape, e) => {this.shapeMouseDown(shape, e)}}
              onMouseUp={(shape, e) => {this.shapeMouseUp(shape, e)}}
            />
          })
        }
      </svg>
    </div>;
  }

  private dragOver(event: React.DragEvent) {
    event.preventDefault();
  }

  private drop(event: React.DragEvent) {
    event.preventDefault();

    let shape: models.Shape;
    let shapeType = event.dataTransfer.getData("shapeType");

    let {x, y} = this.getEventCoordinates(event);
    let size = 80;

    if (shapeType == "circle") {
      shape = new models.Circle(x, y, size);
    } else if (shapeType == "square") {
      shape = new models.Square(x, y, size);
    } else if (shapeType == "triangle") {
      shape = new models.Triangle(x, y, size);
    }

    this.setState({shapes: this.state.shapes.concat(shape)});
  }

  private mouseMove(event: React.MouseEvent) {
    if (this.state.draggingShape) {
      let {shapes} = this.state;
      let shape = shapes[shapes.indexOf(this.state.draggingShape)];

      let {x, y} = this.getEventCoordinates(event);

      shape.x = x - this.state.draggingShapeOffsetX;
      shape.y = y - this.state.draggingShapeOffsetY;

      this.setState({shapes: shapes});
    }
  }

  private shapeMouseDown(shape: models.Shape, event: React.MouseEvent) {
    let {x, y} = this.getEventCoordinates(event);

    this.setState({draggingShape: shape, draggingShapeOffsetX: x - shape.x, draggingShapeOffsetY: y - shape.y});
  }

  private shapeMouseUp(shape: models.Shape, event: React.MouseEvent) {
    this.setState({draggingShape: null, draggingShapeOffsetX: 0, draggingShapeOffsetY: 0});
  }

  private getEventCoordinates(event: React.MouseEvent) {
    const boundingRect = (this.refs["svg"] as Element).getBoundingClientRect();

    return {
      x: event.clientX - boundingRect.left,
      y: event.clientY - boundingRect.top
    };
  }
}
