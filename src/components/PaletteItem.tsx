import * as React from "react";

import {Circle} from "./Circle.tsx";
import {Square} from "./Square.tsx";
import {Triangle} from "./Triangle.tsx";

import * as models from "../models.ts";

export interface PaletteItemProps {
  shapeType: models.ShapeType;
  size: string;
}

export class PaletteItem extends React.Component<PaletteItemProps, {}> {
  render() {
    return <div className="palette-item" draggable="true" onDragStart={(e) => {this.dragStart(e, this.props.shapeType)}}>
      <svg width={this.props.size} height={this.props.size}>
        {this.renderShape(this.props.shapeType)}
      </svg>
    </div>;
  }

  private renderShape(shapeType: models.ShapeType) {
    let size = Number(this.props.size);
    let centerX = size / 2;
    let centerY = size / 2;

    if (shapeType == "circle") {
      return <Circle shape={new models.Circle(centerX, centerY, size)} />;
    } else if (shapeType == "square") {
      return <Square shape={new models.Square(centerX, centerY, size)} />;
    } else if (shapeType == "triangle") {
      return <Triangle shape={new models.Triangle(centerX, centerY, size)} />;
    }
  }

  private dragStart(event: React.DragEvent, shapeType: models.ShapeType) {
    event.dataTransfer.setData("shapeType", shapeType);
  }
}
