import * as React from "react";

import {PaletteItem} from "./PaletteItem.tsx";

export interface PaletteProps {
  size: string;
}

export class Palette extends React.Component<PaletteProps, {}> {
  render() {
    return <div className="palette">
      <PaletteItem shape="circle" size={this.props.size} />
      <PaletteItem shape="square" size={this.props.size} />
      <PaletteItem shape="triangle" size={this.props.size} />
    </div>;
  }
}
