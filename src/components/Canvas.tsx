import * as React from "react";

import {CanvasItem} from "./CanvasItem.tsx";

import * as models from "../models.ts";

export interface CanvasProps {
}

export interface CanvasState {
  shapes?: models.Shape[];
  draggingShapeIndex?: number;
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

    this.windowMouseMove = this.windowMouseMove.bind(this);
    this.windowMouseUp = this.windowMouseUp.bind(this);
  }

  render() {
    return <div className="canvas"
      onDragOver={(e) => {this.dragOver(e)}}
      onDrop={(e) => {this.drop(e)}}
    >
      <svg ref="svg">
        {
          this.state.shapes.map((shape, i) => {
            return <CanvasItem
              shape={shape}
              key={i}
              onMouseDown={(shape, e) => {this.shapeMouseDown(shape, e)}}
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

  private shapeMouseDown(shape: models.Shape, event: React.MouseEvent) {
    let {x, y} = this.getEventCoordinates(event);

    this.setState({
      draggingShapeIndex: this.state.shapes.indexOf(shape),
      draggingShapeOffsetX: x - shape.x,
      draggingShapeOffsetY: y - shape.y
    });

    window.addEventListener("mousemove", this.windowMouseMove);
    window.addEventListener("mouseup", this.windowMouseUp);
  }

  private windowMouseMove(event: MouseEvent) {
    if (this.state.draggingShapeIndex != null) {
      let shape = this.state.shapes[this.state.draggingShapeIndex];
      let {x, y} = this.getEventCoordinates(event);

      shape.x = x - this.state.draggingShapeOffsetX;
      shape.y = y - this.state.draggingShapeOffsetY;

      this.setState({shapes: this.state.shapes});
    }
  }

  private windowMouseUp(event: MouseEvent) {
    this.setState({
      draggingShapeIndex: null,
      draggingShapeOffsetX: 0,
      draggingShapeOffsetY: 0
    });

    window.removeEventListener("mousemove", this.windowMouseMove);
    window.removeEventListener("mouseup", this.windowMouseUp);
  }

  private getEventCoordinates(event: MouseEvent | React.MouseEvent) {
    const boundingRect = (this.refs["svg"] as Element).getBoundingClientRect();

    return {
      x: event.clientX - boundingRect.left,
      y: event.clientY - boundingRect.top
    };
  }
}
