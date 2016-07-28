import * as React from "react";

import {Circle} from "./Circle.tsx";
import {Square} from "./Square.tsx";
import {Triangle} from "./Triangle.tsx";

import * as models from "../models.ts";

export interface CanvasProps {
}

export interface CanvasState {
  shapes: models.Shape[];
}

export class Canvas extends React.Component<CanvasProps, CanvasState> {
  constructor(props: CanvasProps) {
    super(props);
    this.state = {shapes: []};
  }

  render() {
    return <div className="canvas" onDrop={(e) => {this.drop(e)}} onDragOver={(e) => {this.dragOver(e)}}> 
      <svg ref="svg">
        {
          this.state.shapes.map((shape) => {
            return this.renderShape(shape);
          })
        }
      </svg>
    </div>;
  }

  private renderShape(shape: models.Shape) {
    let key = Math.random();

    if (shape instanceof models.Circle) {
      return <Circle shape={shape} key={key} />;
    } else if (shape instanceof models.Square) {
      return <Square shape={shape} key={key} />;
    } else if (shape instanceof models.Triangle) {
      return <Triangle shape={shape} key={key} />;
    }
  }

  private dragOver(event: React.DragEvent) {
    event.preventDefault();
  }

  private drop(event: React.DragEvent) {
    event.preventDefault();

    let shapeType = event.dataTransfer.getData("shape");
    let shape: models.Shape;
    let rect = (this.refs["svg"] as Element).getBoundingClientRect();
    let centerX = event.pageX - rect.left;
    let centerY = event.pageY - rect.top;
    let size = 80;

    if (shapeType == "circle") {
      shape = new models.Circle(centerX, centerY, size);
    } else if (shapeType == "square") {
      shape = new models.Square(centerX, centerY, size);
    } else if (shapeType == "triangle") {
      shape = new models.Triangle(centerX, centerY, size);
    }

    this.setState({shapes: this.state.shapes.concat(shape)});
  }
}
