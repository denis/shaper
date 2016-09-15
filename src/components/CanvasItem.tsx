import * as React from "react";

import {Circle} from "./Circle.tsx";
import {Square} from "./Square.tsx";
import {Triangle} from "./Triangle.tsx";

import * as models from "../models.ts";

export interface CanvasItemProps {
  shape: models.Shape;
  onMouseDown?: (shape: models.Shape, event: React.MouseEvent) => void;
  onDoubleClick?: (shape: models.Shape, event: React.MouseEvent) => void;
}

export class CanvasItem extends React.Component<CanvasItemProps, {}> {
  render() {
    return <g
      onMouseDown={(e) => {this.onMouseDown(e)}}
      onDoubleClick={(e) => {this.onDoubleClick(e)}}
    >
      {this.renderShape(this.props.shape)}
    </g>;
  }

  private renderShape(shape: models.Shape) {
    if (shape instanceof models.Circle) {
      return <Circle shape={shape} />;
    } else if (shape instanceof models.Square) {
      return <Square shape={shape} />;
    } else if (shape instanceof models.Triangle) {
      return <Triangle shape={shape} />;
    }
  }

  private onMouseDown(event: React.MouseEvent) {
    if (this.props.onMouseDown) {
      this.props.onMouseDown(this.props.shape, event);
    }
  }

  private onDoubleClick(event: React.MouseEvent) {
    if (this.props.onDoubleClick) {
      this.props.onDoubleClick(this.props.shape, event);
    }
  }
}
