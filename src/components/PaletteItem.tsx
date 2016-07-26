import * as React from "react";

import {Circle} from "./Circle.tsx";
import {Square} from "./Square.tsx";
import {Triangle} from "./Triangle.tsx";

import * as models from "../models/shapes.ts";

export interface PaletteItemProps {
  shape: string;
  size: string;
}

export class PaletteItem extends React.Component<PaletteItemProps, {}> {
  render() {
    return <div className="palette-item" draggable="true" onDragStart={(e) => {this.dragStart(e, this.props.shape)}}>
      <svg width={this.props.size} height={this.props.size}>
        {this.renderShape(this.props.shape)}
      </svg>
    </div>;
  }

  private renderShape(shape: string) {
    let size = Number(this.props.size);
    let centerX = size / 2;
    let centerY = size / 2;

    if (shape == "circle") {
      return <Circle shape={new models.Circle(centerX, centerY, size)} />;
    } else if (shape == "square") {
      return <Square shape={new models.Square(centerX, centerY, size)} />;
    } else if (shape == "triangle") {
      return <Triangle shape={new models.Triangle(centerX, centerY, size)} />;
    }
  }

  private dragStart(event: React.DragEvent, shape: string) {
    event.dataTransfer.setData("shape", shape);
  }
}
