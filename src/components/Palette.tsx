import * as React from "react";

import {PaletteItem} from "./PaletteItem.tsx";

export interface PaletteProps {
  size: string;
}

export class Palette extends React.Component<PaletteProps, {}> {
  render() {
    return <div className="palette">
      <PaletteItem type="circle" size={this.props.size} />
      <PaletteItem type="square" size={this.props.size} />
      <PaletteItem type="triangle" size={this.props.size} />
    </div>;
  }
}
