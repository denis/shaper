import * as React from "react";

import {PaletteItem} from "./PaletteItem.tsx";

export interface PaletteProps {
  size: string;
}

export class Palette extends React.Component<PaletteProps, {}> {
  render() {
    return <div className="palette">
      <PaletteItem shapeType="circle" size={this.props.size} />
      <PaletteItem shapeType="square" size={this.props.size} />
      <PaletteItem shapeType="triangle" size={this.props.size} />
    </div>;
  }
}
