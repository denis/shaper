import * as React from "react";

import * as models from "../models/shapes/triangle.ts";

export interface TriangleProps {
  shape: models.Triangle;
}

export class Triangle extends React.Component<TriangleProps, {}> {
  render() {
    let {shape} = this.props;

    return <polygon
      points={`${shape.x - shape.size / 2} ${shape.y + shape.size / 2},
               ${shape.x + shape.size / 2} ${shape.y + shape.size / 2},
               ${shape.x} ${shape.y - shape.size / 2}`}
      fill={shape.fillColor}
    />;
  }
}
