import * as React from "react";

export interface CanvasProps {
}

export class Canvas extends React.Component<CanvasProps, {}> {
  render() {
    return <div className="canvas">
      <svg></svg>
    </div>;
  }
}
