import * as React from "react";

import {CanvasItem} from "./CanvasItem.tsx";

import * as models from "../models.ts";

export interface CanvasProps {
  shapes: models.Shape[];
  onDrop: (shapeType: models.ShapeType, x: number, y: number) => void;
  onMouseMove: (shapeId: number, x: number, y: number) => void;
  onDoubleClick: (shapeId: number, x: number, y: number) => void;
}

export class Canvas extends React.Component<CanvasProps, {}> {
  private draggingShapeIndex : number;
  private draggingShapeOffsetX: number;
  private draggingShapeOffsetY: number;

  constructor(props: CanvasProps) {
    super(props);

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
          this.props.shapes.map((shape, i) => {
            return <CanvasItem
              shape={shape}
              key={i}
              onMouseDown={(shape, e) => {this.shapeMouseDown(shape, e)}}
              onDoubleClick={(shape, e) => {this.shapeDoubleClick(shape, e)}}
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
    let {x, y} = this.getEventCoordinates(event);
    this.props.onDrop(event.dataTransfer.getData("shapeType") as models.ShapeType, x, y);
  }

  private shapeMouseDown(shape: models.Shape, event: React.MouseEvent) {
    let {x, y} = this.getEventCoordinates(event);

    this.draggingShapeIndex = this.props.shapes.indexOf(shape);
    this.draggingShapeOffsetX = x - shape.x;
    this.draggingShapeOffsetY = y - shape.y;

    window.addEventListener("mousemove", this.windowMouseMove);
    window.addEventListener("mouseup", this.windowMouseUp);
  }

  private shapeDoubleClick(shape: models.Shape, event: React.MouseEvent) {
    let {x, y} = this.getEventCoordinates(event);
    this.props.onDoubleClick(this.props.shapes.indexOf(shape), x - this.draggingShapeOffsetX, y - this.draggingShapeOffsetY);
  }

  private windowMouseMove(event: MouseEvent) {
    if (this.draggingShapeIndex != null) {
      let {x, y} = this.getEventCoordinates(event);
      this.props.onMouseMove(this.draggingShapeIndex, x - this.draggingShapeOffsetX, y - this.draggingShapeOffsetY);
    }
  }

  private windowMouseUp(event: MouseEvent) {
    this.draggingShapeIndex = null;
    this.draggingShapeOffsetX = 0;
    this.draggingShapeOffsetY = 0;

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
