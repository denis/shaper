import * as React from "react";

export interface CanvasProps { width: string; height: string; }

export class Canvas extends React.Component<CanvasProps, {}> {
  render() {
    return <svg width={this.props.width} height={this.props.height}></svg>;
  }
}
