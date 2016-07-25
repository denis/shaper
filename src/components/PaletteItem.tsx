import * as React from "react";

import {Circle} from "./Circle.tsx";
import {Square} from "./Square.tsx";
import {Triangle} from "./Triangle.tsx";

import * as models from "../models/shapes.ts";

export interface PaletteItemProps {
  type: string;
  size: string;
}

export class PaletteItem extends React.Component<PaletteItemProps, {}> {
  render() {
    return <div className="palette-item">
      <svg width={this.props.size} height={this.props.size}>
        {this.renderShape(this.props.type)}
      </svg>
    </div>;
  }

  private renderShape(type: string) {
    let size = Number(this.props.size);
    let center_x = size / 2;
    let center_y = size / 2;

    if (type == "circle") {
      return <Circle shape={new models.Circle(center_x, center_y, size)} />;
    } else if (type == "square") {
      return <Square shape={new models.Square(center_x, center_y, size)} />;
    } else if (type == "triangle") {
      return <Triangle shape={new models.Triangle(center_x, center_y, size)} />;
    }
  }
}